const getAll = (req, res)=>{
    res.send("GET todos");
}

const create = (req, res)=>{
    res.send("POST todos");
}

const update = (req, res)=>{
    res.send("PUT todos");
}

const remove = (req, res)=>{
    res.send("DELETE todo " + req.params.id);
}

module.exports = {
    getAll,
    create,
    update,
    remove
};