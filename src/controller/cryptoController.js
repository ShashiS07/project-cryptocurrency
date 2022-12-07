const axios= require('axios')

const getcryptocurrency=async function(req,res){
try{
    let key=req.headers.authorization
    console.log(key)
    let currency={
        method:"get",
        url:`api.coincap.io/v2/assets?Authorization=${key}`
    }
    let result=await axios(currency)
    let data=result.data
    return res.status(200).send({status:true,message:data})
}catch(error){
    return res.status(500).send({status:false,message:error.message})
}
}

module.exports={getcryptocurrency}