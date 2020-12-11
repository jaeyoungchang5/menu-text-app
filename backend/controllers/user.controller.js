const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

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

        const token = createToken(user);
        res.header('auth-token', token);
        res.status(201).json({result: 'success', message: 'Signup successful', token: token});
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

        user.checkPassword(req.body.password, (err,result) => {
            if (result){
                console.log('Found user: Correct password');
                const token = createToken(user);
                res.header('auth-token', token);
                res.status(200).json({result: 'success', message: 'Login successful', token: token});
            } else {
                console.log('Found user: Incorrect password');
                res.status(400).json({result: 'error', message: 'Incorrect password'});
            }
        });


    } catch (err) {
        console.log('weird error');
        console.log(err);
        res.status(401).json(err);
        return;
    } 
}

function createToken(user) {
    return jwt.sign({_id: user._id, username: user.username}, process.env.ACCESS_TOKEN_SECRET);
}