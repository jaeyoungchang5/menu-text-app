const mongoose = require('mongoose');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const cluster = process.env.CLUSTER;

console.log(cluster);

const databaseUrl = process.env.DATABSE_URL || 'mongodb+srv://' + username + ':' + password + cluster;
console.log(databaseUrl);

mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;

db.once('connected', () => {
    console.log('Backend: Connected to MongoDB ' + db.name + ' at ' + db.host + ': ' + db.port);
})