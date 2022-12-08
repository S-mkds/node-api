const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'your-access-token'
var useModel = require('../models//Users-mysql');

var user = {}

user.signup = async (req, res) => {
    let error = validationResult(req)
    console.log(error)
    if (error.isEmpty()) {
            let email = req.body.email
            let password = req.body.password
            let firstname = req.body.firstname
            let lastname = req.body.lastname
            let createdAt = new Date
            let updatedAt = new Date
            await useModel.create(email, password, firstname, lastname, createdAt, updatedAt)
            res.status(200).send('Utilisateur créé')
    }else {
        res.status(400).json({
            message: 'Email or password is incorrect'
        })
    }
}

user.login = async (req, res) => {
    var connexion = await useModel.checkLogin(req.body.email, req.body.password)
    if (connexion == true) { 
        let user = await useModel.findOneByEmail(req.body.email)
        console.log(user[0].id)
        let token = jwt.sign({id: user.id[0].id, accessTokenSecret})
    }else {
        res.status(401).json({
            message: 'Email or password is incorrect'
        })
        res.status(200)
        res.send('Route login sucess') 
        }
}

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


user.findOneById = async (req, res) => {
    let result = await useModel.findOneById(req.params.id)
    res.send(200).send(result)
}

module.exports = user

