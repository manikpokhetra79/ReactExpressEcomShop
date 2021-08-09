const express = require('express');
const app  = express();
const port = 5000;
const products = require('./data/products');

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
app.listen(port,function(err){
    if(err){
        console.log("Error while connecting to Express Server");
        return;
    }
    console.log(`Successfully connected to Express Server at : ${port} port`);
});