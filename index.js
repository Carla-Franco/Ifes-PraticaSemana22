const express = require('express')
const app = express()
const porta = 443

app.get("/simples", function(req, res) {
  res.sendFile(__dirname + '/Simples.html')
})

app.get("/cobertura", function(req, res) {
  res.sendFile(__dirname + '/Cobertura.html')
})

app.get("/piscina", function(req, res) {
  res.sendFile(__dirname + '/Piscina.html')
})

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/PaginaPrincipal.html')
})

app.listen(porta, () => { console.log('Servidor rodando') })