const Like=require("../models/likeModel");
const Posts=require("../models/postModel");

exports.likePost=async (req ,res)=>{
    try{
        const{post,user}=req.body;

        const  like= new Like({
            post,user,
        })
        const savedLike=await like.save();
        const updatedPost=await Posts.findByIdAndUpdate(post,{$push:{likes:savedLike._id}}, {new:true}).populate("likes").exec();
        res.json({
            posts:updatedPost
        })
    }
    catch(err){
        return res.status(400).json({
            error:"not created like"
        })
    }
}
exports.deleteLike=async(req,res)=>{
    try{
        const{post,user,like}=req.body;
        
         const deletedLike=await Like.findOneAndDelete({post:post,_id:like});
         const updatedPost=await Posts.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true});
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

}