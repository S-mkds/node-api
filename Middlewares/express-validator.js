const { body } = require('express-validator');

const middlewareConnexion = () => {
    return [ body('email').isEmail().withMessage("Email invalid"),
        body('password').isStrongPassword({ minLengh: 8, minLowercase: 1, minUppercase:  1,
        returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5,
        pointsForContainingLower: 10, pointsForContainingUpper: 10,
        pointsForContainingNumber: 10, pointsForContainingSymbol: 10,
        })
    ]
}  

module.exports = {middlewareConnexion}