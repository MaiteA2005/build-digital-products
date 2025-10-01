const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Logic for fetching todos
  res.json({
    "status": "success",
    "data": {
      "todos": []
    }
  });
});


router.post('/', (req, res) => {
  // Logic for creating a todo
  res.json({
    "status":"success",
    "data": { 
        "todo": {
            "text": "Learn Node.js"
        }
      }
  }) 
});

module.exports = router;