const express = require('express');
const router = express.Router();
const menusCtrl = require('../controllers/menu.controller');
const usersCtrl = require('../controllers/user.controller');

/*---------- Public Routes ----------*/

/* user */
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

/* menu */
router.get('/menu/:date/:meal/:diningHall', menusCtrl.getMenu);
router.post('/menu/', menusCtrl.postMenu);
router.put('/menu/:date/:meal', menusCtrl.putMenu);
router.delete('/menu/:date/:meal', menusCtrl.deleteMenu);

module.exports = router;