const Post=require("../models/postModel");
exports.createPost=async (req,res)=>{
    try{
        const {title,body}=req.body;
        const post=new Post({
            title,body
        })
        const savedPost=await post.save();
        
        res.json({
            post:savedPost
        })

    }
    catch(err){
          return res.status(400).json({
           success:false,
           message:"post not created",
           error:"error ocucured"
        })
    }
}
exports.getAllPosts=async(req,res)=>{
    try{
     
        const Allposts=await Post.find().populate("comments").populate("likes").exec();
         res.json({
          Allposts,
        })
    }
    catch(err){
         return res.status(400).json({
           success:false,
           message:"post not fetch",
           error:"error ocucured"
        })
    }
}