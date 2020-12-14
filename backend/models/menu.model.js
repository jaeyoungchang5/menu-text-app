const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    date: {
        type: String, // 'YYYY-MM-DD'
        required: true
    },
    day: {
        type: String,
        enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    meal: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner'],
        required: true
    },
    menu: [{
        category: {
            type: String,
            required: true
        },
        items: [{
            type: String,
            required: true
        }]
    }],
    diningHall: {
        type: String,
        enum: ['North Dining Hall', 'South Dining Hall'],
        required: true
    },
    weekNum: {
        type: Number
    }
});

menuSchema.pre('save', function(next){
    const menu = this;

    menu.weekNum = calculateWeekNum(menu.date);
    menu.day = calculateDay(menu.date);
    next();
})

function calculateWeekNum(date){
    let dateObj = new Date(date + 'T00:00:00');
    let yearStart = new Date(dateObj.getFullYear(), 0, 1);
    let numDays = Math.floor( (dateObj-yearStart)/86400000 )
    return Math.ceil( (yearStart.getDay() + 1 + numDays ) / 7 );
}

function calculateDay(date){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dateObj = new Date(date + 'T00:00:00');
    let dayOfWeek = dateObj.getDay();
    return days[dayOfWeek];
}

module.exports = mongoose.model('menu', menuSchema);