const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    phoneNum: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // alertTimes: [{
    //     day: {
    //         type: String,
    //         enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    //         required: true
    //     },
    //     time: {
    //         type: String,
    //         match: '([01]\d|2[0-3]):[0-5]\d',
    //         required: true
    //     },
    //     diningHall: {
    //         type: String,
    //         enum: ['North Dining Hall', 'South Dining Hall'],
    //         required: true
    //     }
    // }]
});

userSchema.pre('save', function(next){
    const user = this;

    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
})

userSchema.methods.checkPassword = function(password, params) {
    bcrypt.compare(password, this.password, params);
}

module.exports = mongoose.model('user', userSchema);