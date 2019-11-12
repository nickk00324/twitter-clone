const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('connected to mongodb successfully'))
.catch( err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());




const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})