const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    type:String,
    image:String,
    name:String,
    description : String,
    price:String
});

const Products = mongoose.model("Products",productSchema);

module.exports = Products;