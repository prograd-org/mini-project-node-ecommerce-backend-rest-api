const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Product = require("../models/Product");

router.post("/order/:name",async(req,res)=>{
    try{
        var orderData = new Order(req.body);
        var product_name = req.params.name;
        const data = await Product.findOne({name:product_name});
        console.log(`data is`,data);
        orderData.product=data;
        const data1= await orderData.save();
        console.log(`data1 is`,data1);
        res.status(201).send(data1);
    }catch(err){
        res.status(500).send(err);
    }
});

router.get("/order",async(req,res)=>{
    try{
        const data = await Order.find().populate('product');
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }

});
router.get("/order/:id",async(req,res)=>{
    try{
        var _id=req.params.id;
        const data = await Order.findById({_id:_id});
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
    
});

router.put("/order/:id",async(req,res)=>{
    try{
        var _id=req.params.id;
        const data = await Order.findByIdAndUpdate(_id,req.body,{new:true}) 
           
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
    
});

router.delete("/order/id",async(req,res)=>{
    try{
        var _id=req.params.id;
        const data = await Order.findOneAndDelete(_id);
        res.status(201).send(data);
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
    
});
module.exports=router;