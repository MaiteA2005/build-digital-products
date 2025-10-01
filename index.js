const express = require('express')
const logger = require("./middleware/logger")
const app = express()
const port = 3000
const apiV1TodosRouter = require("./routers/api/v1/todos")

app.get('/', (req, res) => {res.send('Maite Aldenkamp!')});

app.use('/api/v1/todos', apiV1TodosRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})