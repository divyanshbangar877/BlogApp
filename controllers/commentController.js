const Post=require("../models/postModel");
const Comment=require("../models/commentModel");



exports.createComment=async (req,res)=>{
    try{

        const {body,user,post}=req.body;
        const comment=new Comment({
            body,user,post
        });
        const savedComment=await comment.save();
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true}).populate("comments").exec();

        res.json({
            post:updatedPost
        })
    }
    
    catch(err){

        return res.status(400).json({
           success:false,
           message:"comment not created",
           error:"error ocucured"
        })
    }
};
