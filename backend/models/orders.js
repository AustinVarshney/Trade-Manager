const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let orderSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
})

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;