import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDb from './config/db.js';
import products from './data/products.js';

// env
const app  = express();
dotenv.config();
connectDb();
const PORT = process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send('API is running');
});
app.get('/api/products',(req,res)=>{
    res.json(products);
})
app.get('/api/products/:id',(req,res)=>{
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
})
app.listen(PORT,function(err){
    if(err){
        console.log("Error while connecting to Express Server");
        return;
    }
    console.log(`Express Server running in ${process.env.NODE_ENV} mode at : ${PORT} port`.yellow.italic);
});