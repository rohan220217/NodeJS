const express = require('express');
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');


const app = express();

mongoose.connect("mongodb://localhost/vidly", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Mongodb is connected'))
    .catch(err => console.error('Could not connect to mongodb...', err))

app.use(express.json());
app.use('/api/genres', genres); 
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`You are listening to port ${port}...`));