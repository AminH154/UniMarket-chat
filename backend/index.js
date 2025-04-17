const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');



//midleware
app.use(express.json());




app.listen(3000,()=>{
    console.log('app run in port 3000');
})

app.get('/',(req,res)=>{
    res.send('hello world');
});

mongoose.connect('mongodb+srv://aminbouallegui0:3h2ppfgYapc7OJdN@cluster0.w2mamla.mongodb.net/Node-Market?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('connected to mongoDB');
})
.catch((err)=>{
    console.log(err);
})


//routes
app.use('/api/products',productRoute);
