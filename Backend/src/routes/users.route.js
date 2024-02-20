const express = require('express');

const usersController = require('../controllers/users.controller.js');
const router = express.Router();

console.log('hello')
router.post( "/form",usersController.form);
router.post( "/saveAsDraft",usersController.saveAsDraft);

router.get( "/submitdata",usersController.submitdata);

router.get( "/draftdata",usersController.draftdata);

router.get( "/typenametable",usersController.typenametable);
//router.post( "/login",usersController.login);
router.post('/login', usersController.loginUser);

router.post( "/signup",usersController.signup);

router.get( "/billity-form",usersController.billityForm);

module.exports = router;