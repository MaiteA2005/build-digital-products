const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Maite Aldenkamp')
})

//GET api/v1/todos
app.get('/api/v1/todos', (req, res) => {res.send("GET todos");});

//POST api/v1/todos
app.post('/api/v1/todos', (req, res) => {res.send("PORT todos");});

//PUT api/v1/todos/3
app.put('/api/v1/todos/:id', (req, res) => {res.send("PUT todos");});

//DEL api/v1/todos/3
app.delete('/api/v1/todos/:id', (req, res) => {res.send("DELETE todo " + req.params.id);});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
