var express = require('express');
var router = express.Router();

const user = require('../Controllers/Users-controllers');
var userCtrl = require('../Controllers/Users-controllers')

//POST ROUTE
router.post('/register', userCtrl.register);

router.post('/login', userCtrl.login);

//GET ROUTE
router.get('/users/:id', userCtrl.getOneUser);

router.get('/', userCtrl.getAllUser);

//PUT ROUTE
router.put('/users/:id', userCtrl.modifyUser);

//DELETE ROUTE
router.delete('/delete/:id', userCtrl.deleteOneUser);

module.exports = router;