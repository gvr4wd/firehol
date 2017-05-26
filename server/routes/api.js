/**
 * Created by dshin on 5/26/2017.
 */
const express = require('express');
const router = express.Router();
const todosController = require('../controllers').todos;

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/todos', todosController.list);
module.exports = router;
