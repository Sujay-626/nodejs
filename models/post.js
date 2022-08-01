const mongoose=require("mongoose");

const post_Scheme = mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	id:{
		type:Number,
		required:true
	},
	gender:{
		type:String,
		required:true
	}
}, {collection:'posts'});

module.exports = mongoose.model("Post",post_Scheme);