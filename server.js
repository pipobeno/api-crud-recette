const express = require("express");
const mongoose = require('mongoose');
const recipeRouter = require('./router/recipeRouter');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json()) // permet au serveur de lire les requetes en format json !
app.use(recipeRouter);

app.listen(8000, (err)=>{
    if (err) {
        console.log(err);
        
    }else{
        console.log('je marche');
    }
})

mongoose.connect('mongodb://localhost:27017/recette-api');