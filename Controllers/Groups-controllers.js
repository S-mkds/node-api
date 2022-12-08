const groupsMongo = require("../models/Groups");
// const dotenv = require("dotenv").config();

exports.createGroups = (req, res, next) => {
    const groups = new groupsMongo({
        name: req.body.name,
        description: req.body.description,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    });
    groups.save()
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
    groupsMongo.find()
    .then((groups) => {
        res.status(200).json(groups);
    })
    .catch((error) => {
        res.status(400).json({
        error: error,
        });
    });
};

exports.getOneGroups = (req, res, next) => {
    groupsMongo.findOne({
    _id: req.params.id,
    })
    .then((groups) => {
        res.status(200).json(groups);
    })
    .catch((error) => {
        res.status(404).json({
        error: error,
        });
    });
};

exports.deleteGroups = (req, res, next) => {
    groupsMongo.findOne({ _id: req.params.id })
    .then((groups) => {
        if (groups.imageUrl != null) {
        const filename = groups.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {});
        }
        groups.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Message supprimée !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};