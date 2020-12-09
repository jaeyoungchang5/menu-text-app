const express = require('express');

const app = express();
const backend_port = 5000;

app.use(express.json());

const routes = require('./routes/router');

require('./config/user.database');
app.use('/api', routes);

app.listen(backend_port, () => {
    console.log('Backend: Server is listening on port ' + backend_port)
});