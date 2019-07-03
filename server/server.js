const express = require('express');
const app = express();
const parser = require('body-parser');
app.use(parser.json());
const cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017').then(client => {
    const db = client.db('guests');
    const bookingsCollection = db.collection('bookings');
    const bookingsRouter = createRouter(bookingsCollection);
    app.use('/api/bookings', bookingsRouter)
});

app.listen(3000, function () {
    console.log(`Listening on ${this.address().port}`)
});