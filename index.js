const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const app = express()
const routes = require('./routes/index')

app.use(cors('*'))
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/competences', routes.competences)
app.use('/contact', routes.contact)
app.use('/credits', routes.credits)
app.use('/hobbies', routes.hobbies)
app.use('/homepage', routes.homepage)
app.use('/parcours', routes.parcours)
app.use('/projet', routes.projet)

app.listen(3003, () => console.log('Express server is running'))
