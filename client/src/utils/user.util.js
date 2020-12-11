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
    })
    .then(({token}) => {
        createToken(token);
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
        throw new Error('Email, username, or phone number has already been taken!');
    })
    .then(({token}) => {
        createToken(token);
    });
}

function getUser(){
    return getUserFromToken();
}

function logout(){
    removeToken();
}

export default {
    login,
    signup,
    getUser,
    logout
};

function createToken(token){
    console.log('creating token ' + token);
    if (token) {
        localStorage.setItem('token', token);
    } else {
        localStorage.removeItem('token');
    }
}

function getToken(){
    return localStorage.getItem('token');
}

function getUserFromToken(){
    const token = getToken();
    console.log('got token ' + token);
    return token ? JSON.parse(atob(token.split('.')[1])): null;
}

function removeToken(){
    localStorage.removeItem('token');
    console.log('removed token');
}