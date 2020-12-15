const express = require('express');
const router = express.Router();
const menusCtrl = require('../controllers/menu.controller');
const usersCtrl = require('../controllers/user.controller');
const auth = require('../config/auth');
/*---------- Public Routes ----------*/

/* user */
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.put('/:username/schedule', usersCtrl.putSchedule);
router.get('/:username/master-schedule', usersCtrl.getMasterSchedule);
router.get('/test', auth, (req,res) => {
    res.json(req.user);
    console.log('sup');
});

/* menu */
router.get('/menu/:diningHall/:date/:meal', menusCtrl.getMenu);
router.get('/menu/all', menusCtrl.getAllMenu);
router.get('/menu/week:weekNum/:diningHall', menusCtrl.getWeekMenuForDiningHall);
router.post('/menu/', menusCtrl.postMenu);
router.put('/menu/:diningHall/:date/:meal', menusCtrl.putMenu);
router.delete('/menu/:diningHall/:date/:meal', menusCtrl.deleteMenu);

/* menu */
router.get('/menu/:diningHall/:date/:meal', menusCtrl.getMenu);
router.post('/menu/', menusCtrl.postMenu);
router.put('/menu/:diningHall/:date/:meal', menusCtrl.putMenu);
router.delete('/menu/:diningHall/:date/:meal', menusCtrl.deleteMenu);

module.exports = router;