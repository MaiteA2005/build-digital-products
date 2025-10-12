router.getAll = (req, res) => {
  // Logic for fetching todos
  res.json({
    "status": "success",
    "data": {
      "todos": []
    }
  });
};


router.create = (req, res) => {
  // Logic for creating a todo
  res.json({
    "status":"success",
    "data": { 
        "todo": {
            "text": "Learn Node.js"
        }
      }
  });
};

module.exports.getAll = router.getAll;
module.exports.create = router.create;
