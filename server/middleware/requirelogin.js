const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const userModel = require('../models/user');
const {jwt_screate} = require('../keys');

module.exports=(req, res, next)=>{
    const{authorization} = req.headers;
    if(!authorization){
        return res.status(401).json({error:"you must be log in to access this page"});
    }
    const token = authorization.replace("Bearer ","");
    jwt.verify(token,jwt_screate,(err,payload)=>{
        if(err){
            return res.status(401).json({error:"you must be log in to access this page"});
        }
        userModel.findById(payload.id)
        .then(userdata=>{
            req.user = userdata;
            next();
        })
    }) 
}