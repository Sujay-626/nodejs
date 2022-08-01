const {response} = require('express')
const express=require('express');
const router=express.Router();
//importing json file
const abc=require('../posts.json');
//importing mongoose modules
const Post=require('../models/post');

router.post('/', async (req,res)=>{
	const posts = new Post({
		name:req.body.name,
		id:req.body.id,
		gender:req.body.gender
	})
	try{
		await posts.save();
		res.send({status:'true',message:'db saved'});
	}
	catch(err){
		res.send(err.message)
	}
	
})

router.get('/',async (req,res)=>{
	try{
		const posts=await Post.find();
		res.send(posts);
	}
	catch(err){
		res.send(err.message);
	}
})
/*router.get('/',(req,res)=>{
	res.send(posts);
});
router.post('/',(req,res)=>{
	posts.push(req.body);
	res.send(posts);
});

router.delete('/:id',(req,res)=>{
	posts.splice(req.params.id,1);
	res.send(posts);
})
//exporting router */
module.exports=router;
