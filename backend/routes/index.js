var express = require('express');
var router = express.Router();
var resolver = require("../src/path/AskerResourceResolver");
var taskService = require("../src/task/EntityService");

/* GET home page. */
router.get('/', function(req, res, next) {

  res.sendFile(resolver.resolve("index.html"));
  // res.render('index', { title: 'Express' });
});






// TASK ROUTES


// GET /tasks - findAll
// GET /task/:id - findOne
// POST /tasks - save
// DELETE /task/:id - delete task with id
// PUT /task/:id - update task with id

router.get('/tasks', function(req, res, next) {
    // console.log("HEre");
    console.log("FIND ALL");
    res.json(taskService.findAll());
});

router.get('/task/:id', function(req, res, next) {
    // res.send('respond with a resource');
    res.json(taskService.findOne(req.params.id));
});

router.post('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


module.exports = router;
