const User = require('../models/user.model');

module.exports = {
    signup,
    login
};

async function signup(req, res){
    console.log('USER.CONTROLLER: Signing up');
    const user = new User(req.body);
    try {
        console.log('USER.CONTROLLER: signup succes');
        await user.save();
        res.status(201).json({result: 'success', message: 'Signup successful'});
    } catch (err) {
        console.log('USER.CONTROLLER: signup error');
        console.log(err);
        res.status(400).json(err);
    }
}

async function login(req, res){
    console.log('USER.CONTROLLER: Logging in');
    try {
        const user = await User.findOne({username: req.body.username});

        if (!user){
            res.status(404).json({result: 'error', message: 'Username not found'});
            return;
        }

        if (req.body.password === user.password){
            console.log('Found user: Correct password');
            res.status(200).json({result: 'success', message: 'Login successful'});
        } else {
            console.log('Found user: Incorrect password');
            res.status(400).json({result: 'error', message: 'Incorrect password'});
        }


    } catch (err) {
        console.log('weird error');
        console.log(err);
        res.status(401).json(err);
        return;
    } 
}