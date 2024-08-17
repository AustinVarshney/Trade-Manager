require('dotenv').config()

const mongoose = require("mongoose");
const Position = require("../models/positions.js");

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

const allPositions = [
    {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
        isLoss: true,
    },
    {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "+10.04%",
        day: "-1.35%",
        isLoss: true,
    },
]

Position.insertMany(allPositions);