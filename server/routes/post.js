const express = require('express');
const router = express.Router();
const postModel = require('../models/post');
const requirelogin = require('../middleware/requirelogin');

router.get('/allposts',(req,res)=>{
    postModel.find()
    .populate("postedby","_id name")
    .then(posts=>{
        res.json({posts:posts});
    })
    .catch(err=>{
        console.log(err);
    })
})

router.post('/createpost',requirelogin,(req,res)=>{
    const{title,body,pic}=req.body;
    if(!title || !body || !pic){
        return res.status(422).json({error:"title and body feild is required"});
    }
    req.user.password=undefined;
    const post = new postModel({
        title,
        body,
        image:pic,
        postedby:req.user,
    })
    post.save()
    .then(result=>{
        res.json({post:result,msg:"post created successfully"});
    })
    .catch(err=>{
        console.log(err);
    })
})

router.get('/myposts',requirelogin,(req,res)=>{
    postModel.find({postedby:req.user._id})
    .populate("postedby","_id name")
    .then(myposts=>{
        res.json({myposts:myposts});
    })
    .catch(err=>{
        console.log(err);
    })
})

module.exports = router