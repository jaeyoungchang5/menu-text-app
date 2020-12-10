const Menu = require('../models/menu.model');

module.exports = {
    getMenu,
    postMenu,
    putMenu,
    deleteMenu
};

function getMenu(req, res){
    console.log('MENU.CONTROLLER: get menu');
    Menu.findOne({date: req.params.date, meal: req.params.meal, diningHall: req.params.diningHall}, 'menu')
    .then(menu => {
        if (!menu) {
            return res.status(404).json({message: "Menu not found"});
        }
        res.json(menu);
    }).catch(err => {
        res.status(400).json(err.message);
    })

}

async function postMenu(req, res){
    console.log('MENU.CONTROLLER: post menu');
    const menu = new Menu(req.body);

    // check for duplicate menu
    let foundOne = await Menu.findOne({date: req.body.date, meal: req.body.meal, diningHall: req.body.diningHall})
    .then(preexistingMenu => {
        if (preexistingMenu) {
            return true;
        }
        return false;
    });
    if (foundOne){
        return res.status(400).json({message: "Menu already exists"})
    }

    menu.save()
    .then(data => {
        console.log('MENU.CONTROLLER: post menu success');
        res.status(201).json({result: 'success', message: 'Menu post successful'});
    }).catch(err => {
        res.status(400).json(err.message);
    });
}

function putMenu(req, res){
    console.log(req.params.date);

}

function deleteMenu(req, res){
    console.log(req.params.date);

}