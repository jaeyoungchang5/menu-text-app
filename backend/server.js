const express = require('express');
const path = require('path');

const app = express();
const backend_port = 5000;

app.listen(backend_port, () => {
    console.log('Backend: Server is listening on port ' + backend_port)
});

app.get('/api', (req, res) => {
    console.log('Backend: connection is working')
    res.send({express: 'backend is connected'});
});