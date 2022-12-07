const mongoose = require('mongoose');

const currencySchema= new mongoose.Schema({
    symbol:{
        type:String,
        unique:true,
    },
    name:{
        type:String,
        unique:true
    },
    marketCapUsd:String,
    priceUsd:String
},{timestamps:true})

module.exports = mongoose.model('Currency', currencySchema)
