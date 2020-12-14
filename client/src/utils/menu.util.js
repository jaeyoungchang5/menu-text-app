const https = require('https');

function getAllMenu(){
    return fetch('http://localhost:5000/api/menu/all')
    .then(res => res.json())
    .then(json => {
        return json;
    });
}

export default {
    getAllMenu
}