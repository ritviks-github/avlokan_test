const mongoose = require('mongoose');

const connect = mongoose.connect('mongodb://localhost:27017/eCommerce').then(()=>{
    console.log("Connected to Database")
})
module.exports = connect