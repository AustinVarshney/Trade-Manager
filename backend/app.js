require('dotenv').config()

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const session = require("express-session");
const MongoStore = require('connect-mongo');
const ExpressError = require("./utils/ExpressError.js");
const wrapAsync = require("./utils/wrapAsync.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bodyParser = require('body-parser');

const Holding = require("./models/holdings.js");
const Position = require("./models/positions.js");
const Order = require("./models/orders.js");
const User = require("./models/user.js");
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: "GET,POST,DELETE",
    allowedHeaders: "Content-Type",
    credentials: true,
}));

app.options('*', cors({
    origin: ["http://localhost:5173/", "http://localhost:5174/"],
    methods: "GET,POST,DELETE",
    credentials: true,
}));

app.use(bodyParser.json());

// const MONGO_URL = "mongodb://127.0.0.1:27017/zerodha";
const DB_URL = process.env.MONGODB_URL;

main()
    .then(() => {
        console.log("DB is connected");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(DB_URL);
}

const store = MongoStore.create({
    mongoUrl: DB_URL,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
})

store.on("error", () => {
    console.log("ERROR in MONGO SESSION STORE", err);
})

const isProduction = process.env.NODE_ENV === 'production';

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'none' : 'lax',
    }
};

app.use(cookieParser(process.env.SECRET));

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    if (req.user) {
        res.locals.currUser = req.user;
        next();
    } else {
        next();
    }
})

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).send("Issue with Authentication");
}

app.get("/", (req, res) => {
    res.json({ msg: "Hello" });
})

app.get("/allHoldings", wrapAsync(async (req, res) => {
    let allHoldings = await Holding.find({});
    res.json(allHoldings);
}));

app.get("/allPositions", wrapAsync(async (req, res) => {
    let allPositions = await Position.find({});
    res.json(allPositions);
}));

app.get("/allOrders", isAuthenticated, wrapAsync(async (req, res) => {
    const ownerId = req.user._id.toString();

    let allOrders = await Order.find({owner: ownerId});
    res.json(allOrders);
}));

app.post("/buyOrders", isAuthenticated, wrapAsync(async (req, res) => {      //Done
    let {qty, price, itemName, itemMode} = req.body;

    const ownerId = req.user._id.toString();
    console.log("Owner ID:", ownerId);

    const order = new Order({
        name: itemName,
        qty: qty,
        price: price,
        mode: itemMode,
        owner: ownerId,
    });
    await order.save();
    console.log(qty, price, itemName, itemMode, ownerId);
    res.set('Access-Control-Allow-Origin', '*');
}));

app.post("/sellOrders", isAuthenticated, wrapAsync(async (req, res) => {     //Done
    let {qty, price, itemName, itemMode} = req.body;

    const ownerId = req.user._id.toString();
    console.log("Owner ID:", ownerId);

    const order = new Order({
        name: itemName,
        qty: qty,
        price: price,
        mode: itemMode,
        owner: ownerId,
    });
    await order.save();
    console.log(qty, price, itemName, itemMode, ownerId);
    res.set('Access-Control-Allow-Origin', '*');
}));

app.delete("/deleteOrder/:id", wrapAsync(async(req, res) => {
    let {id} = req.params;
    let deletedOrder = await Order.findByIdAndDelete(id);
    console.log(deletedOrder);
    res.status(200).json({ message: "Order deleted successfully" });
}));

app.post("/signup", wrapAsync(async (req, res) => {
    let { email, username, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    res.cookie("user", username);
    res.redirect("http://localhost:5173/");
}));

app.get("/login", wrapAsync((req, res) => {
    res.redirect("http://localhost:5173/login");
}));

app.post("/login", passport.authenticate('local', { failureRedirect: '/login' }), wrapAsync(async (req, res) => {
    if (!req.isAuthenticated()) {
        res.redirect("http://localhost:8080/login");
    } else {
        // // Assuming req.user contains the authenticated user data
        // req.session.hasReloaded = req.session.hasReloaded || false;

        // if (!req.session.hasReloaded) {
        //     // Set the hasReloaded flag and respond accordingly
        //     req.session.hasReloaded = true;
        //     res.setHeader('X-Second-Reload', 'true');
        // }

        let userData = req.user.username || "Guest";
        res.cookie('user', userData, {secure: isProduction, sameSite: isProduction ? 'none' : 'lax'});
        res.redirect('http://localhost:5173/');
    }
}));

app.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("http://localhost:5174/");
    })
});

app.all("*", (req, res, next) => {
    throw new ExpressError(404, "Page Not Found!");
})

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).send(message);
})

let port = process.env.PORT || 8080;

app.listen(8080, () => {
    console.log(`Port is Listening at http://localhost:${port}`);
})
