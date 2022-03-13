const mongoose = require('mongoose');
const uri = "mongodb+srv://aceiteng:<password>@cluster0.hfhuw.mongodb.net/ace?retryWrites=true&w=majority";
// const uri = "mongodb://localhost:27017/ace?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const connectToMongo = ()=>{
   mongoose.connect(uri,()=>{
        console.log("connected to DB")
    })
}
module.exports = connectToMongo;