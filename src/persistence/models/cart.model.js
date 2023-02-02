import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'productos'
        }
    ]
});

export const CartModel = mongoose.model("carritos", Schema);