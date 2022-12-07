const axios= require('axios')
const cryptoModel=require('../Model/cryptoModel')

const getcryptocurrency=async function(req,res){
try{
    let currency={
        headers: {
                Authorization: "Bearer e251a148-16a9-4178-af56-7d3839492ef2",
              },
        method:"get",
        url:`https://api.coincap.io/v2/assets`
    }
    let result=await axios(currency)
    let data=result.data.data.sort((a, b) =>b.changePercent24Hr - a.changePercent24Hr)
    let arr=[]
    await cryptoModel.deleteMany({})
    for(let i=0;i<data.length;i++){
        let unique=await cryptoModel.find({symbol:data[i].symbol,name:data[i].name})
        if(unique.length==0){
            let collection={}
            collection.symbol=data[i].symbol,
            collection.name=data[i].name,
            collection.marketCapUsd=data[i].marketCapUsd,
            collection.priceUsd=data[i].priceUsd
            arr.push(collection)
        }
    }
    await cryptoModel.insertMany(arr)

    return res.status(200).send({status:true,message:data})
}catch(error){
    return res.status(500).send({status:false,message:error.message})
}
}

module.exports={getcryptocurrency}