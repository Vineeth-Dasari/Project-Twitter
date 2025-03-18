const express = require('express');
const bodyParser = require('body-parser')
const connect = require('./config/database');


const apiRoutes = require('./routes/index')

const { UserRepository,  } = require('./repository/index');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api', apiRoutes);

app.listen(3000, async () => {

    console.log('server started at : 3000');
    await connect();
    console.log('Mongo DB connected');


})
