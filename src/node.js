const express=require('express');


const app=express();
const path=require("path");
const hbs=require("hbs");
const collection=require("./db");
const async = require('hbs/lib/async');
const { dir } = require('console');
const tempelatePath=path.join(__dirname,'../templ')
app.use(express.json());
app.set("view engine","hbs");
app.set("views",tempelatePath);
app.use(express.static('images'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("login");
})
app.get("/signup",(req,res)=>{
    res.render("signup");
})
app.get("/predict",(req,res)=>{
    res.render("predict");
})
app.get("/index",(req,res)=>{
    res.render("index");
})
app.get("/recomm",(req,res)=>{
    res.render("recomm");
})

app.post('/signup',async (req,res)=>{
    const data={
        name:req.body.name,
        password:req.body.password

    }

    await collection.insertMany([data])
    res.render("index");


})
app.post('/login',async (req,res)=>{

    try{
        const check=await collection.findOne({name:req.body.name})
        if(check.password===req.body.password){
            res.render("index")
        }
        else{
            res.send("wrong password")
        }
    }
    catch{
        res.send("wrong details")
    }
   


})


app.listen(3000,()=>{
    console.log('port connected');
})