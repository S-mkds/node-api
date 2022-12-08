const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv").config();
const User = require("../models/Users-mongo");

exports.register = (req, res, next) => {
    console.log(req.body.email);
    console.log(req.body.password);

    bcrypt.hash(req.body.password, 10)
    .then((hash) => {
        const user = new User({
            email: req.body.email,
            password: hash,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt
        })
        console.log(user);
        user.save()
        .then(() =>
            res.status(201).json({
                message: "Register success"
            })
        )
        .catch((error) => res.status(400).json({error}).send());
        })
        .catch((error) => { res.status(500).json({error}).send(console.log(error));
        })
}; 

exports.login = (req, res, next) => {
    User.findOne({
        email: req.body.email,
    })
    .then((user) => {
        if (!user) {
        return res.status(401).json({ error: "Utilisateur incorrecte" });
        }
        bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
            if (!valid) {
            return res.status(401).json({ error: "mdp incorrecte" });
            }
            //************************ tokenSecret here****************************
            // res.status(200).json({
            // userId: user._id,
            // token: jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, {
            //     expiresIn: "24h",
            // }),
            // });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status((500).json(error)));
};

exports.getOneUser = (req, res, next) => {
    User.findById(req.params.id)
    .then((user) => {
        res.status(200).json(user);
    })
    .catch((error) => res.status(400).json({ error: "Utilisateur inconnu" }));
};

exports.getAllUser = (req, res, next) => {
    User.find()
    .then((user) => {
        res.status(200).json(user);
    })
    .catch((error) => res.status(400).json({ error: "Utilisateurs non trouvé" }));
};
exports.modifyUser = (req,res) => {
    res.status(204)
    res.send("Modification d'un utilisateur")
};

exports.modifyPost = (req, res, next) => {
    Post.updateOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Utilisateur bien modifiée !" }))
    .catch((error) =>
        res.status(403).json({ error: error, message: "Requête non autorisée !" })
    );
};

exports.deleteOneUser = (req, res, next) => {
    User.findById(req.params.id)
    .then((user) => {
        User.deleteOne({ req: req.params.id })
        .then((user) => res.status(200).json(user))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(400).json({ error: "Utilisateur inconnu" }));
};
