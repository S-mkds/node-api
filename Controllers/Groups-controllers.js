const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv").config();
const Groups = require("../models/Groups");

exports.createGroups = (req, res, next) => {
    const Groups = new Groups({
        name: req.body.name,
        description: req.body.description,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    });
    Groups.save()
    .then(() => {
        res.status(201).json({
        message: "Groups bien enregistrée !",
        });
    })
    .catch((error) => {
        res.status(400).json({
        error: error,
        });
    });
};

exports.getAllGroups = (req, res, next) => {
    Groups.find()
    .then((GroupsAll) => {
        res.status(200).json(GroupsAll);
    })
    .catch((error) => {
        res.status(400).json({
        error: error,
        });
    });
};

exports.getOneGroups = (req, res, next) => {
    Groups.findOne({
    _id: req.params.id,
    })
    .then((Groups) => {
        res.status(200).json(Groups);
    })
    .catch((error) => {
        res.status(404).json({
        error: error,
        });
    });
};