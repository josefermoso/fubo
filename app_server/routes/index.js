var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main')
var ctrlAuth = require('../controllers/authentication');

var jwt = require('express-jwt');
var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/restricted', auth, ctrlMain.restricted);
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);


module.exports = router;