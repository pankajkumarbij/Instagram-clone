const express = require('express');
const router = express.Router();
const userModel = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwt_screate} = require('../keys');
const requirelogin = require('../middleware/requirelogin');

router.post('/signup',(req,res)=>{
    const{name,email,password}=req.body;
    if(!email || !password || !name){
        return res.status(422).json({error:"please fill all the feilds"});
    }
    userModel.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exist with this email"});
        }
        bcrypt.hash(password,12)
        .then(hashedPassword=>{
            const user = new userModel({
                name,
                password:hashedPassword,
                email
            })
            user.save()
            .then(user=>{
                res.json({msg:"You Signup successfully"});
            })
            .catch(err=>{
                console.log(err);
            })
        })
    })
    .catch(err=>{
        console.log(err);
    })
})

router.post('/login',(req,res)=>{
    const{email,password} = req.body
    if(!email || !password){
        return res.status(422).json({error:"please fill all the feilds"});
    }
    userModel.findOne({email:email})
    .then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error:"Sorry !! email and password is not match"});
        }
        bcrypt.compare(password,savedUser.password)
        .then(domatch=>{
            if(domatch){
                const {_id,name,email}=savedUser;
                const token = jwt.sign({id:savedUser._id},jwt_screate);     
                res.json({msg:"user successfully sign in",token,_id,name,email});
            }
            else{
                return res.status(422).json({error:"Sorry !! email and password is not match"});
            }
        })
        .catch(err=>{
            console.log(err);
        })
    })
    .catch(err=>{
        console.log(err);
    })
})

module.exports = router