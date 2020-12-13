const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const meals = ['Breakfast', 'Lunch', 'Dinner'];

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
    schedule: [{
        alertOn: {
            type: Boolean,
            required: true
        },
        day: {
            type: String,
            enum: days,
            required: true
        },
        time: {
            type: String,
            match: '(([01]\d)|(2[0-3])):[0-5]\d',
            required: true
        },
        meal: {
            type: String,
            enum: meals,
            required: true
        },
        diningHall: {
            type: String,
            enum: ['North Dining Hall', 'South Dining Hall', 'Other'],
            required: true
        }
    }]
});

userSchema.pre('save', function(next){
    const user = this;

    user.schedule = defaultSchedule();

    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
})

userSchema.methods.checkPassword = function(password, params) {
    bcrypt.compare(password, this.password, params);
}

function defaultSchedule(){
    let schedule = [];
    for (d in days){
        for (m in meals){
            schedule.push({
                alertOn: false,
                day: days[d],
                time: '00:00',
                meal: meals[m],
                diningHall: 'Other'
            });
        }
    }
    return schedule;
}

module.exports = mongoose.model('user', userSchema);