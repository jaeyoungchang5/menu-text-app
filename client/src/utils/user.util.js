const https = require('https');

function login(credentials){
    return fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Bad credentials!');
    });
}

function signup(credentials){
    return fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Email already taken!');
    });
}

export default {
    login,
    signup
}