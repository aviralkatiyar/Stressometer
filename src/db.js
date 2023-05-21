const mongoose=require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/database")
.then(()=>{
console.log("mongodb connected");

})
.catch(()=>{
    console.log("err");
 
})

const loginschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    password:{
        type:String,
        required:true
    },

})

const collection=new mongoose.model("collection1",loginschema)
module.exports=collection;