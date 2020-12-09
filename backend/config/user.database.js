const mongoose = require('mongoose');

const databaseUrl = process.env.DATABSE_URL || 'mongodb://localhost:27017/menu-text-app-DB';

mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;

db.once('connected', () => {
    console.log('Connected to MongoDB ' + db.name + ' at ' + db.host + ': ' + db.port);
})