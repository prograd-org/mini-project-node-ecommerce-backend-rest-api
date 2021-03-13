const mongoose = require("mongoose");
const validator = require("validator");
const productSchema = new mongoose.Schema({
   
    name: { 
        type: String, 
        required: true
    },
    price: { 
        type: Number,
        required: true 
    },
    productImage: { 
        type: String 
    }
});

const Product = new mongoose.model("Product",productSchema);

module.exports = Product;