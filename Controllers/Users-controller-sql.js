var useModel = require('../models//Users-mysql'); 
var { validationResult } = require('express-validatior');

const jwt = require('jsonwebtoken');
const accessTokenSecret = 'your-access-token'

var user = {}

user.deleteUsers = (req, res) => {
    useModel.delete(req.params.id) 
    .then(response => {
        res.status(200).json(response)})
    .catch(err => {
        res.status(500).json(response)})
    }

user.modifyUser = (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let id = req.body.id
    useModel.pul(email, password, firstname, lastname, id)
    res.status(200).send('Modification utilisateur pris en compte')
}

user.findAll = async (req, res) => {
    let result = await useModel.findAll()
    res.send(200).send(result)
}

