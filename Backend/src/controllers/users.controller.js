

const UserModel = require('../models/users.model');
var dbConn = require('../../config/db.config');






exports.signup= (req, res) => {
    UserModel.signup(req,(err, user) => {
        if (err) {
            res.send(err)
        } else {
            res.send(user)
        }
    })
}

exports.login= (req, res) => {
    UserModel.login(req,(err, user) => {
        if (err) {
            res.send(err)
        } else {
            res.send(user)
        }
    })
}
