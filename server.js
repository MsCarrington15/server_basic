const express = require('express');
const server = express();
mongo_url = 'mongodb://localhost:8080/server_basic';
const mongoose = require('mongoose');
const userController = require('./controllers/userController');
server.use(express.json())

server.listen(8080, function(){
    console.log('Server is running...');
    mongoose.connect(mongo_url).then(function(){
        console.log('Database is running...');
        server.post('/users', userController.postUsers);
        server.get('/users', userController.getAllUsers)
    }).catch(function(error){console.log('database is not running ', error.message)})
})