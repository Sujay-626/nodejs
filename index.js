const express=require('express');
const app=express();
const bodyparser=require("body-parser")
//importing express package and storing express function in app
const posts_route=require('./routes/postsroute.js');
//importing mongoose and connecting
const mongoose = require("mongoose");

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
//body-parser for json files
app.use('/posts',posts_route)

mongoose.connect("mongodb://127.0.0.1/Sujay",
 {useNewUrlParser: true},()=>{
	console.log("Connected to db");
});

app.get('/',(req,res)=>{
	res.send("Hello Sujay");
});

app.listen(3030,()=>{
	console.log("listening on port 3030");
});