const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://system:root@cluster0.goc2f.mongodb.net/mini-project?retryWrites=true&w=majority",{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>{
console.log(`db connected successfully`);
}).catch((err)=>{
    console.log("No connection");
})