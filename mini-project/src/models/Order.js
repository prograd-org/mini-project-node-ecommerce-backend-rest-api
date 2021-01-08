const mongoose = require("mongoose");
const validator = require("validator");
const orderSchema = new mongoose.Schema({
    
    product: {
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'Product', 
         required: true 
        },
    quantity: { 
        type: Number, 
        default: 1 }
});

const Order = new mongoose.model("Order",orderSchema);

module.exports = Order;