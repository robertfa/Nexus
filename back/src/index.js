import express from 'express'
import bodyParser from 'express'
// const express = require('express')
import db from './config/db.js'
const app = express()
app.disable('x-powered-by')  // desactivar en la cabecera aparezxa expres

await db.init()
//import ficha from './controllers/ficha.js'
import mediaEntry from './routes/mediaEntry.js'

app.get('/', function (request, response) {
    response.send('Hello World')
})

// Express Express: Api(interfaz de programacion para la aplicacion) Rest Framework (END POINTS)
/*app.get('/books', function (request, response) {
    const books=[
                    {title: 'mi libro',descripcion: 'mi libro'},
                    {title: 'mis libri',descripcion: 'mis libri'}
                ]
    response.json(books)
})*/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/mediaEntry',mediaEntry)

// app.get('/ficha',ficha)

/*app.get('/ficha', async function (request, response) {
    const ficha=await db.query('SELECT * FROM ficha');
    response.json(ficha)
})*/


app.listen(3000,function(){console.log('All Green http://localhost:3000/')})
