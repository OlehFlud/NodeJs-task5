const jwt = require('jsonwebtoken');

const {JWT_SECRET} = require('../config/config');

module.exports = token => {

    jwt.verify(token, JWT_SECRET, (err, decoded) => {

        if (err) {
            throw new Error('Token is not valid')
        }

        console.log(decoded);
    });

};