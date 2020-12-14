const https = require('https');

function getAllMenu(){
    return fetch('http://localhost:5000/api/menu/all')
    .then(res => res.json())
    .then(json => {
        return json;
    });
}

function getWeekMenuForDiningHall(weekNum, diningHall){
    return fetch('http://localhost:5000/api/menu/week' + weekNum + '/' + diningHall)
    .then(res => res.json())
    .then(json => {
        return json;
    });
}

export default {
    getAllMenu,
    getWeekMenuForDiningHall
}