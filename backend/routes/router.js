const express = require('express');
const router = express.Router();
const menusCtrl = require('../controllers/menu.controller');
const usersCtrl = require('../controllers/user.controller');
const auth = require('../config/auth');
/*---------- Public Routes ----------*/

/* user */
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/test', auth, (req,res) => {
    res.json(req.user);
});

/* menu */
router.get('/menu/:diningHall/:date/:meal', menusCtrl.getMenu);
router.post('/menu/', menusCtrl.postMenu);
router.put('/menu/:diningHall/:date/:meal', menusCtrl.putMenu);
router.delete('/menu/:diningHall/:date/:meal', menusCtrl.deleteMenu);

/* menu */
router.get('/menu/:diningHall/:date/:meal', menusCtrl.getMenu);
router.post('/menu/', menusCtrl.postMenu);
router.put('/menu/:diningHall/:date/:meal', menusCtrl.putMenu);
router.delete('/menu/:diningHall/:date/:meal', menusCtrl.deleteMenu);

module.exports = router;