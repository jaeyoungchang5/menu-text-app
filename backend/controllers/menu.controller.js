const Menu = require('../models/menu.model');
const { all } = require('../routes/router');

module.exports = {
    getMenu,
    getAllMenu,
    getWeekMenu,
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

function getAllMenu(req, res){
    console.log('MENU.CONTROLLER: get all menus');
    Menu.find().sort({date: 1})
    .then(allMenus => {
        if (!allMenus){
            res.status(404).json({result: 'error', message: 'Menus not found'});
            return;
        }

        res.status(200).json(allMenus);
    }).catch(err => {
        console.log('weird error');
        console.log(err);
        res.status(401).json(err);
        return;
    })
}

function getWeekMenu(req, res){
    console.log('MENU.CONTROLLER: get week menu');
    Menu.find({weekNum: parseInt(req.params.weekNum)}).sort({date: 1}).
    then(weekMenus => {
        if (!weekMenus){
            res.status(404).json({result: 'error', message: 'Menus not found for week'});
            return;
        }

        res.status(200).json(weekMenus);
    }).catch(err => {
        console.log('weird error');
        console.log(err);
        res.status(401).json(err);
        return;
    })
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