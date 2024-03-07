const express = require('express');
const usersController = require('../controllers/users.controller.js');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secretkey = "secretkey";
router.post("/signup", usersController.signup);
router.post("/login", (req, res) => {
    const user = {
        id: 1,
        username: "karan",
        email: "karan@gmail.com"
    }
    jwt.sign({ user }, secretkey, { expiresIn: '300s' }, (err, token) => {
        res.json({
            token
        })
    })
})
router.post("/profile", verifytoken, (req, res) => {

    jwt.verify(req.token, secretkey, (err, authData) => {
        if (err) {
            res.send({ result: "invalid token " })
        } else {
            res.json({
                message: "profile accessed",
                authData
            })
        }
    })

});
function verifytoken(req, res, next) {
    const bearerheader = req.headers['authorization'];
    if (typeof bearerheader !== 'undefined') {

        //     const bearer = bearerheader.split(" ");
        //     const token = bearer[1];
        req.token = bearerheader;
        next();
    } else {
        res.send({
            result: "Token is not valid"
        })
    }
}
module.exports = router;