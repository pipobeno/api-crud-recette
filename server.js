const express = require("express");
const mongoose = require('mongoose');

const app = express();

app.listen(8000, (err)=>{
    if (err) {
        console.log(err);
        
    }else{
        console.log('je marche');
    }
})

mongoose.connect('mongodb://localhost:27017/recette-api');