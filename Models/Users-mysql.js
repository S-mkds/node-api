var Database = require('../database')
var UserModel = {}

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