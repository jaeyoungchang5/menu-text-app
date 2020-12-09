const User = require('../models/user.model');

module.exports = {
    signup,
    login
};

async function signup(req, res){
    console.log('USER.CONTROLLER: Signing up');
    const user = new User(req.body);
    try {
        await user.save();
        res.json({status: 'Success'});
    } catch (err) {
        res.status(400).json(err);
    }
}

async function login(req, res){
    console.log('USER.CONTROLLER: Logging in');
    try {
        const user = await User.findOne({username: req.body.username});

        if (!user){
            res.status(404).json({err: 'Bad credentials'});
            return;
        }

        if (req.body.password === user.password){
            console.log('Found user: Correct password');
            res.json({status: 'Success'});
        } else {
            console.log('Found user: Incorrect password');
            res.json({status: 'Error', message: 'Incorrect password'});
        }


    } catch (err) {
        res.status(401).json(err);
        return;
    } 
}