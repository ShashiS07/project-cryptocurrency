const mongoose = require('mongoose');

const currencySchema= new mongoose.Schema({
    symbol:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    marketCapUsd:String,
    priceUsd:String
},{timestamps:true})

module.exports = mongoose.model('Currency', currencySchema)
