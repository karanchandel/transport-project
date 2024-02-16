

const UserModel = require('../models/users.model');
var dbConn = require('../../config/db.config');


exports.form= (req, res) => {
    UserModel.form(req,(err, user) => {
        if (err) {
            res.send(err)
        } else {
            res.send(user)
        }
    })
}


exports.saveAsDraft= (req, res) => {
    UserModel.saveAsDraft(req,(err, user) => {
        if (err) {
            res.send(err)
        } else {
            res.send(user)
        }
    })
}


exports.submitdata= (req, res) => {
    UserModel.submitdata(req,(err, user) => {
        if (err) {
            res.send(err)
        } else {
            res.send(user)
        }
    })
}



exports.draftdata= (req, res) => {
    UserModel.draftdata(req,(err, user) => {
        if (err) {
            res.send(err)
        } else {
            res.send(user)
        }
    })
}

exports.typenametable= (req, res) => {
    UserModel.typenametable(req,(err, user) => {
        if (err) {
            res.send(err)
        } else {
            res.send(user)
        }
    })
}

exports.update= (req, res) => {
    UserModel.update(req,(err, user) => {
        if (err) {
            res.send(err)
        } else {
            res.send(user)
        }
    })
}



exports.signup= (req, res) => {
    UserModel.signup(req,(err, user) => {
        if (err) {
            res.send(err)
        } else {
            res.send(user)
        }
    })
}
// exports.login= (req, res) => {
//     UserModel.login(req,(err, user) => {
//         if (err) {
//             res.send(err)
//         } else {
//             res.send(user)
//         }
//     })
// }

// login user
exports.loginUser = (async (req, res) => {


    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        var extractedErrors = errors.array({ onlyFirstError: true });
        return res.status(400).json({
            status: 400,
            data: null,
            message: extractedErrors[0].msg,
            error: true,
        });
    }

    UserModel.loginUser(req, (err, user) => {
        if (err) {
            return res.status(400).send(err.message);
        } else {
            return res.status(200).send(user);
        }
    })
});


