![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# ProGrad Lab | NODE | MINI PROJECT - PROMARKET BACKEND | REST API

## Learning Goals

In this exercise, the goal is to recollect all the concepts you have learned so far in react:

- Express.js
- Mongo db
- Mongoose
- REST API
- Routes,
- Models

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.

## Instructions

Your task is to build a complete shopping cart backend using `node js, express and mongoose`for the `ProMarket` app you created in the react week. Now we would create the backend using node.js. Your application involves the following features, 
- User
- Product
- Order


**You are free to logically decide and create routes and database schema based on your application.**

### PROGRESSION 1 | SETUP
Setup the express server and initial project setup.
To do the initial node setup, do `npm init`
Then install the following dependencies
- `npm install express`
- `npm install body-parser`
- `npm install mongoose`
- `npm install cors`

### PROGRESSION 2 | CREATE MODELS
There are three models which you need to design
- User.js
```

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true }
});
```

- Product.js
```
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    price: { type: Number, required: true },
    productImage: { type: String }
});
```

- Order.js
```
const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
});
```

### PROGRESSION 3 | CREATE THE ROUTES
Create the following routes and you need to do get, post, put and delete for all the user, product and orders.

- USERROUTES
- PRODUCTROUTES
- ORDERROUTES

### BONUS
You can additonally work on the add to cart and buy product.


## Submission

If you didn't add, commit and push the changes you made, this is the last call. :smile:

please share your github links with your Mentors. Your Mentor's will check up your work and provide feedback. 

## Summary

If you managed to do it, good job! :trophy:

We are proud of you!

Happy Coding ProGrad ❤️!

