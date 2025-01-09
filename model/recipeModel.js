const mongoose = require('mongoose');


const recipeSchema = new mongoose.Schema({
    title:  {
        type: String,
        required: [true,'Veuillez entrer un titre de recette !']
    },
    ingredients: [{
        type: String,
        required: [true, 'Veuillez entrer des ingrédients !'],
    }],
    instructs: [{
        type: String,
        required: [true, 'Veuillez entrez des instructions de préparations !'],
    }],
    timecook: {
        type: Number,
        required: [true, ' Veuillez entrer un temps de préparation !'],
    },
    timefiring: [{
        type: Number,
        required: [true, ' Veuillez entrer un temps de cuisson ! '],
    }],
    difficulty: {
        type: String,
        required: [true, 'Veuillez entrez un niveau difficultés !'],
    },
    category: {
        type: String,
        required: [true, 'Veuillez entrez un catégorie de recette !'],
    },
})


const Recipe = mongoose.model('recipes', recipeSchema)

module.exports = Recipe