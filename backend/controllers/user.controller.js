const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

module.exports = {
    signup,
    login,
    putSchedule,
    getMasterSchedule
};

function signup(req, res){
    console.log('USER.CONTROLLER: Signing up');
    const user = new User(req.body);
    user.save()
    .then(newUser => {
        const token = createToken(newUser);
        res.header('auth-token', token);
        res.status(201).json({result: 'success', message: 'Signup successful', token: token});
    }).catch(err => {
        console.log('USER.CONTROLLER: signup error');
        console.log(err);
        res.status(400).json(err);
    });   
}

function login(req, res){
    console.log('USER.CONTROLLER: Logging in');
    User.findOne({username: req.body.username})
    .then(foundUser => {
        if (!foundUser){
            res.status(404).json({result: 'error', message: 'Username not found'});
            return;
        }

        foundUser.checkPassword(req.body.password, (err,result) => {
            if (result){
                console.log('Found user: Correct password');
                const token = createToken(foundUser);
                res.header('auth-token', token);
                res.status(200).json({result: 'success', message: 'Login successful', token: token});
            } else {
                console.log('Found user: Incorrect password');
                res.status(400).json({result: 'error', message: 'Incorrect password'});
            }
        });
    }).catch(err => {
        console.log('weird error');
        console.log(err);
        res.status(401).json(err);
        return;
    });
}

function createToken(user) {
    return jwt.sign({user: {username: user.username, fName: user.fName, lName: user.lName}}, process.env.ACCESS_TOKEN_SECRET);
}

function putSchedule(req, res) {

    console.log('USER.CONTROLLER: put schedule');
    // if (req.params.username != req.user.user.username){
    //     res.status(400).json({result: 'error', message: 'Invalid access'});
    //     return;
    // }

    const schedule = req.body;
    User.updateOne({username: req.params.username}, 
        {$set: {'schedule': schedule}}
    ).then(dbResponse => {
        if (dbResponse.nModified == 1){
            res.status(200).json({result: 'success', message: 'User schedule update successful'});
        } else {
            res.status(202).json({result: 'Nothing updated'});
        }
    }).catch(err => {
        res.status(500).json(err.message);
    });
}

function getMasterSchedule(req, res){
    console.log('USER.CONTROLLER: getMasterSchedule');
    User.findOne({username: req.params.username})
    .then(foundUser => {
        if (!foundUser){
            res.status(404).json({result: 'error', message: 'Username not found'});
            return;
        }

        const schedule = foundUser.schedule;
        res.status(200).json(schedule);

    }).catch(err => {
        console.log('weird error');
        console.log(err);
        res.status(401).json(err);
        return;
    });

}