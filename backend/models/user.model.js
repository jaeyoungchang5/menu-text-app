const mongoose = require('mongoose');

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
        required: true
    },
    phoneNum: {
        type: String,
        required: true
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

module.exports = mongoose.model('user', userSchema);