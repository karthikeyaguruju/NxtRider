const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://karthikeya16:9BajuRXYsuMnkczE@cluster0.cjubygn.mongodb.net/Cars' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose
