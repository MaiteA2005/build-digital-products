const express = require('express');
const router = express.Router();
const todosController = require("../../../controllers/api/v1/todos.js");    

//GET api/v1/todos
router.get('/', todosController.getAll);

//POST api/v1/todos
router.post('/', todosController.create);

//PUT api/v1/todos/3
router.put('/:id', todosController.update);

//DEL api/v1/todos/3
router.delete('/:id', todosController.remove);


module.exports = router;