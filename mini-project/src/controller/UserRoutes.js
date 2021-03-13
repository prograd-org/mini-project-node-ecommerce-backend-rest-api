const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.post("/user",async(req,res)=>{
    try{
        var user = new User(req.body);
        const data = await user.save();
        if(req.body==""){
            res.status(400).send("Pls provide data");
        }
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
        
});

router.get("/user",async(req,res)=>{
    try{
        const data = await User.find();
        res.status(201).send(data);
    }catch(e){
        res.status(500).send(err);
        console.log(err);
    }
    
});

router.get("/user/:id",async(req,res)=>{
    try{
        var _id=req.params.id;
        const data = await User.findById({_id:_id});
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
    
});

router.put("/user/:id",async(req,res)=>{
    try{
        var _id=req.params.id;
        console.log(_id);
        const data = await User.findByIdAndUpdate(_id,req.body,{new:true});
        if(!req.params.id){
            res.status(404).send({ message: "The user with the specified ID does not exist." });
            }
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
    
});

router.delete("/user/:id",async(req,res)=>{
    try{
        var _id=req.params.id;
        const data = await User.findOneAndDelete(_id);
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
    
})


module.exports=router;