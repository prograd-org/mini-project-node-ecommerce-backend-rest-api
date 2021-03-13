const express = require("express");
var app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const UserRouter = require("./controller/UserRoutes");
const ProductRouter = require("./controller/ProductRoutes");
const OrderRouter = require("./controller/OrderRoutes");
const port = process.env.PORT || 3000;
require("./db/connect.js");

app.use(express.json());
app.use(cors({origin:"*"}));
app.use(bodyParser.json());
app.use(UserRouter);
app.use(ProductRouter);
app.use(OrderRouter);

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})