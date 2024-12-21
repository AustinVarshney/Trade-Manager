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
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const WebSocket = require('ws');

const wsProtocol = process.env.NODE_ENV === "production" ? 'wss://' : 'ws://';
const wsHost = process.env.WS_HOST || 'localhost'; // Use your deployed domain for production
const wsPort = process.env.WS_PORT || 8081;

const wss = new WebSocket.Server({ port: wsPort });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const backendUrl = process.env.NODE_ENV === "production"
        ? "https://zerodha-project-backend.onrender.com"
        : "http://localhost:8080";

const dashboardUrl = process.env.NODE_ENV === "production"
        ? "https://trade-manager-dashboard.vercel.app"
        : "http://localhost:5173";

const frontendUrl = process.env.NODE_ENV === "production" 
        ? "https://trade-manager-frontend.vercel.app"
        : "http://localhost:5174";

app.use(cors({
    origin: [dashboardUrl, frontendUrl],
    methods: "GET,POST,DELETE",
    allowedHeaders: "Content-Type",
    domain: process.env.NODE_ENV === "production" ? "vercel.com" : undefined,
    credentials: true,
}));

app.options('*', cors({
    origin: [dashboardUrl, frontendUrl],
    methods: "GET,POST,DELETE",
    allowedHeaders: "Content-Type",
    domain: process.env.NODE_ENV === "production" ? "vercel.com" : undefined,
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


wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        console.log(`Received message => ${message}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    // Example of sending a message to the client
    ws.send(JSON.stringify({ message: 'Welcome to the WebSocket server!' }));
});

console.log(`WebSocket server is running on ${wsProtocol}${wsHost}:${wsPort}`);

function generateToken() {
    return crypto.randomBytes(32).toString('hex');
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

async function sendVerificationEmail(email, link) {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Verify your email',
        text: `Please verify your email by clicking the following link: ${link}`,
    });
}

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).send("Authentication or verification issue.");
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

    let allOrders = await Order.find({ owner: ownerId });
    res.json(allOrders);
}));

app.post("/buyOrders", isAuthenticated, wrapAsync(async (req, res) => {      //Done
    let { qty, price, itemName, itemMode } = req.body;

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
    let { qty, price, itemName, itemMode } = req.body;

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

app.delete("/deleteOrder/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedOrder = await Order.findByIdAndDelete(id);
    console.log(deletedOrder);
    res.status(200).json({ message: "Order deleted successfully" });
}));

app.post("/signup", wrapAsync(async (req, res) => {
    // let { email, username, password } = req.body;
    // const newUser = new User({ email, username });
    // const registeredUser = await User.register(newUser, password);
    // console.log(registeredUser);
    // res.cookie("user", username);
    // res.redirect("http://localhost:5173/");

    const { email, username, password } = req.body;
    const token = generateToken();

    const newUser = new User({ email, username, verificationToken: token });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);

    const verificationLink = `${backendUrl}/verify-email?token=${token}`;
    await sendVerificationEmail(email, verificationLink);

    // Log the user in immediately after signup
    req.login(registeredUser, (err) => {
        if (err) {
            console.error('Error during login after signup:', err);
            return res.status(500).send('Error during login after signup.');
        }

        // Set the cookie for the logged-in user
        // res.cookie("user", username, { secure: isProduction, sameSite: isProduction ? 'none' : 'lax' });
        res.cookie("user", username, {
            secure: isProduction,
            sameSite: isProduction ? 'none' : 'lax',
            domain: isProduction ? 'vercel.app' : undefined, // Use your domain in production
        });

        // Redirect to the verification page
        res.redirect(`${frontendUrl}/verification`);
    });
}));

app.get('/verify-email', wrapAsync(async (req, res) => {
    const { token } = req.query;
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
        return res.status(400).send('Invalid or expired token.');
    }

    user.isVerified = true;
    user.verificationToken = undefined; // Clear the token
    await user.save();

    // Send a message to the WebSocket server
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ redirect: true }));
        }
    });

    res.send('Email verified successfully!');
}));

app.get("/login", wrapAsync((req, res) => {
    res.redirect(`${dashboardUrl}/login`);
}));

// app.post("/login", passport.authenticate('local', { failureRedirect: '/login' }), wrapAsync(async (req, res) => {
//     if (!req.isAuthenticated()) {
//         return res.status(401).send("Account or password is incorrect");
//     }
//     if (!req.user.isVerified) {
//         return res.status(403).send("Account not verified");
//     }

//     let userData = req.user.username || "Guest";
//     res.cookie('user', userData, { secure: isProduction, sameSite: isProduction ? 'none' : 'lax' });
//     res.status(200).send("Login successful");
//     // res.redirect('http://localhost:5173/');
// }));

app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            console.error("Error during authentication:", err);
            return res.status(500).send("Server error during authentication.");
        }

        if (!user) {
            // Authentication failed: Invalid username or password
            return res.status(401).send("Account or password is incorrect");
        }

        // Check if the user's account is verified
        if (!user.isVerified) {
            return res.status(403).send("Account not verified");
        }

        // Log in the user and set session
        req.logIn(user, (err) => {
            if (err) {
                console.error("Error logging in the user:", err);
                return res.status(500).send("Error logging in. Please try again.");
            }

            // Login successful
            let userData = user.username || "Guest";

            // res.cookie("user", userData, { secure: isProduction, sameSite: isProduction ? 'none' : 'lax' });

            res.cookie("user", userData, {
                secure: isProduction,
                sameSite: isProduction ? 'none' : 'lax',
                domain: isProduction ? 'vercel.app' : undefined, // Use your domain in production
            });
            return res.status(200).send("Login successful");
        });
    })(req, res, next);
});


app.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            }
            res.clearCookie('connect.sid', { path: '/' }); // Clear the session cookie
            res.redirect(`${frontendUrl}`);
        });
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
