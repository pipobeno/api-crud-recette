const recipeRouter = require('express').Router();
const Recipe = require('../model/recipeModel');

recipeRouter.get("/recipes", async (req, res)=> {
    try {
        let recipes = await Recipe.find()
        res.send(recipes)

    } catch (error) {
        res.send(error.message)
    }
})

recipeRouter.get("/recipes/:id", async (req, res)=> {
    try {
        let recipes = await Recipe.find()
        res.send(recipes)

    } catch (error) {
        res.send(error.message)
    }
})

recipeRouter.post("/recipes", async (req, res)=> {
    try {
        let newRecipe = new Recipe(req.body)
       await newRecipe.save()
        res.json("élément ajouté avec succès")

    } catch (error) {
        res.json(error.message)
    }
})

recipeRouter.put("/recipes/:id", async (req, res)=> {
    try {
        await Recipe.updateOne({_id: req.params.id},req.body, {runValidators})
        res.send("élément Modifié avec succès")

    } catch (error) {
        res.send(error.message)
    }
})


recipeRouter.delete("/recipes/", async (req, res)=> {
    try {
        await Recipe.deleteOne({_id: req.params.id})
        res.send("livre supprimé avec succès")

    } catch (error) {
        res.send(error.message)
    }
})

module.exports = recipeRouter