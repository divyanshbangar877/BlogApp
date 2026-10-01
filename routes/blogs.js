const express=require("express");
const router=express.Router();
const{likePost,deleteLike}=require("../controllers/likeController");
const{createPost,getAllPosts}=require("../controllers/postController");
const {createComment}=require("../controllers/commentController");

router.post("/likes/like",likePost);
router.post("/likes/unlike",deleteLike);
router.get("/posts",getAllPosts);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
module.exports=router;