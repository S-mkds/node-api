var express = require('express');
var router = express.Router();

var userCtrlSql = require('../Controllers/Users-controller-sql');

//POST METHOD
router.post('/signup', userCtrlSql.signup);
router.post('/login', userCtrlSql.login);

//GET METHOD
router.get('/users/:id', userCtrlSql.findOneById);
router.get('/', userCtrlSql.findAll);

//PUT METHOD
router.put('/users/:id', userCtrlSql.modifyUser);

//DELETE METHOD
router.delete('/users/:id', userCtrlSql.deleteUsers);

module.exports = router;