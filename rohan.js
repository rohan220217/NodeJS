const express = require('express');
const genre = require('./routes/genres');

const app = express();

app.use(express.json());
app.use('/api/genres', genre);

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`You are listening to port ${port}...`));