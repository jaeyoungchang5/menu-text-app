const express = require('express');
const cors  = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const backend_port = 5000;

app.use(express.json());
app.use(cors());

const routes = require('./routes/router');

require('./config/database');
app.use('/api', routes);

app.listen(backend_port, () => {
    console.log('Backend: Server is listening on port ' + backend_port);
});