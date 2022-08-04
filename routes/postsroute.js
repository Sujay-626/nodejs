const express=require('express');
const router=express.Router();
//importing multer package
const multer=require('multer');
const upload=multer({dest:'uploads/'});
//importing json file
const posts=require('../posts.json');
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

router.post('/uploads',upload.single('name'),function(req,res){
	res.send("saved");
});

router.post('/uploads/group',upload.array('name'),function(req,res){
	res.send("saved");
});
// router.get('/',(req,res)=>{
// 	res.send(posts);
// });
// router.post('/',(req,res)=>{
// 	posts.push(req.body);
// 	res.send(posts);
// });

// router.delete('/:id',(req,res)=>{
// 	posts.splice(req.params.id,1);
// 	res.send(posts);
// })
//exporting router 
module.exports=router;
