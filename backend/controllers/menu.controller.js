const Menu = require('../models/menu.model');

module.exports = {
    getMenu,
    postMenu,
    putMenu,
    deleteMenu
};

function getMenu(req, res){
    console.log('MENU.CONTROLLER: get menu');
    Menu.findOne({diningHall: req.params.diningHall, date: req.params.date, meal: req.params.meal}, 'menu')
    .then(menu => {
        if (!menu) {
            return res.status(404).json({message: "Menu not found"});
        }
        res.json(menu);
    }).catch(err => {
        res.status(500).json(err.message);
    });
}

function postMenu(req, res){
    console.log('MENU.CONTROLLER: post menu');
    const menu = new Menu(req.body);
    // check for duplicate menu
    Menu.findOne({diningHall: req.body.diningHall, date: req.body.date, meal: req.body.meal})
    .then(preexistingMenu => {
        if (preexistingMenu) {
            res.status(400).json({message: "Menu already exists"});
            return;
        }

        menu.save()
        .then(newMenu => {
            console.log('MENU.CONTROLLER: post menu success');
            res.status(201).json({result: 'success', message: 'Menu post successful'});
        }).catch(err => {
            res.status(500).json(err.message);
        });
    });   
}

function putMenu(req, res){
    Menu.updateOne(req.params, {$set: req.body})
    .then(dbResponse => {
        if (dbResponse.nModified == 1){
            res.status(200).json({result: 'success', message: 'Menu update successful'});
        } else {
            res.status(404).json({result: 'Menu not found'});
        }
    }).catch(err => {
        res.status(500).json(err.message);
    });

}

function deleteMenu(req, res){
    Menu.deleteOne(req.params)
    .then(dbResponse => {
        if (dbResponse.deletedCount == 1){
            res.status(200).json({result: 'success', message: 'Menu delete successful'});
        } else {
            res.status(404).json({result: 'Menu not found'});
        }
    }).catch(err => {
        res.status(500).json(err.message);
    });
}