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
    }
});

module.exports = mongoose.model('menu', menuSchema);