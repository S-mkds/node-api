const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator"); //import MongooseUValidator 

// create schema user
const groupsSchema = mongoose.Schema({
name: { type: String, required: true },
description: { type: String, required: true },
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now },
});

groupsSchema.plugin(uniqueValidator);

module.exports = mongoose.model("groupsMongo", groupsSchema);