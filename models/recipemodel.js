const mongoose = require('mongoose')


const recipeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Recipe',recipeSchema)