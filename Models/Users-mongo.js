const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator"); //import MongooseUValidator 

// create schema user
const userSchema = mongoose.Schema({
email: { type: String, required: true, unique: true },
password: { type: String, required: true },
firstname: { type: String, required: true },
lastname: { type: String, required: true },
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("userMongo", userSchema);