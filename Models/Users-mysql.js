var Database = require('../database')
var UserModel = {}

UserModel.create = (email, password, firstname, lastname, createdAt, updatedAt) => {
    return new Promise((resolve, reject) => {
        Database.query('INSERT INTO users (email, password, firstname, lastname, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)', [email, password, firstname, lastname, createdAt, updatedAt], (error, result) => {
            if (error) {
                reject(error)
            }else {
                return resolve(result)
            }
        })
    })
};

UserModel.findAll = () => {
    return new Promise((resolve, reject) => {
        Database.query('SELECT * FROM users', (error, result) => {
            if (error) {
                reject(error)
            }else {
                return resolve(result)
            }
        })
    })
};

UserModel.findOneById = (id) => {
    return new Promise((resolve, reject) => {
        Database.query('SELECT * FROM users WHERE id =?', id, (error, result) => {
            if (error) {
                reject(error)
            }else {
                return resolve(result)
            }
        })
    })
};

UserModel.findByEmail = (email) => {
    return new Promise((resolve, reject) => {
        Database.query('SELECT * FROM users WHERE email =?', email, (error, result) => {
            if (error) {
                reject(error)
            }else {
                return resolve(result)
            }
        })
    })
};

UserModel.delete = (id) => {
    return new Promise((resolve, reject) => {
        Database.query('SELECT * FROM users WHERE id =?', id, [id], (error, result) => {
            if (error) {
                reject(error)
            }else {
                return resolve(result)
            }
        })
    })
};

