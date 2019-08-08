const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();
const morgan = require('morgan');
const router =  require('./controllers/weatherController');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('short'));
app.use(router);

app.use(express.static(path.join(__dirname, 'getterweather/build')));

app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'getterweather/build', 'index.html'));
});

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected!')
});
