const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    date: {
        type: String, // 'YYYY-MM-DD'
        required: true
    },
    day: {
        type: String,
        enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        required: true
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
    console.log(menu.weekNum);
    next();
})

function calculateWeekNum(date){
    let dateObj = new Date(date);
    let yearStart = new Date(dateObj.getFullYear(), 0, 1);
    let numDays = Math.floor( (dateObj-yearStart)/86400000 )
    return Math.ceil( (dateObj.getDay() + numDays ) / 7 );
}

module.exports = mongoose.model('menu', menuSchema);