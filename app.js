const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/recipe-app'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/reciperoutes')
app.use('/recipes',alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})