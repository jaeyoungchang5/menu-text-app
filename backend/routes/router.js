const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/user.controller');
const auth = require('../config/auth');
/*---------- Public Routes ----------*/

/* user */
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/test', auth, (req,res) => {
    res.json(req.user);
});

module.exports = router;