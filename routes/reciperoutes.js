const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipemodel')


router.get('/', async(req,res) => {
    try{
           const recipes = await Recipe.find()
           res.json(recipes)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const recipe = await Recipe.findById(req.params.id)
           res.json(recipe)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const recipe= new Recipe({
        name: req.body.name,
        ingredients: req.body.ingredients,
        sub: req.body.sub
    })

    try{
        const a1 =  await recipe.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const recipe = await Recipe.findById(req.params.id) 
        recipe.sub = req.body.sub
        const a1 = await recipe.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id',async(req,res)=> {
    try{
        const recipe = await Recipe.findById(req.params.id) 
        recipe.sub = req.body.sub
        const a1 = await recipe.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})



module.exports = router