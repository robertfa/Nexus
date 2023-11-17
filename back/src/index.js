import express from 'express'
// const express = require('express')
import db from './config/db.js'
const app = express()
await db.init()

app.get('/', function (request, response) {
    response.send('Hello World')
})

// Express Express: Api(interfaz de programacion para la aplicacion) Rest Framework (END POINTS)
app.get('/books', function (request, response) {
    const books=[
                    {title: 'mi libro',descripcion: 'mi libro'},
                    {title: 'mis libri',descripcion: 'mis libri'}
                ]
    response.json(books)
})


app.get('/ficha', async function (request, response) {
    console.log('aplega')
    const ficha=await db.query('SELECT * FROM ficha');
     console.log('aplega2')
    response.json(ficha)
})


app.listen(3000,function(){console.log('All Green http://localhost:3000/')})
