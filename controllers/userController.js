//const { model } = require('mongoose');
const { find } = require('../models/user');
const user = require('../models/user');


function postUsers(req, res){
    user.create({
        "first_name":"Aurelia",
        "last_name" : "Osei",
        "date_of_birth": 1998-05-12,
        "school": "Martyrs of uganda",
        },
        {
        "first_name":"Rhoda",
        "last_name" : "Carrington",
        "date_of_birth": 2000-12-13,
        "school": "Star of the Sea",
        },
        {
        "first_name":"Joshua",
        "last_name" : "Frank",
        "date_of_birth": 1999-09-08,
        "school": "Association Model Basic School"
    }
    ).then(function(data){
        res.status(200).json({success: true,data})
    }
        
    ).catch(function(error){
        res.status(404).json({success: false, message: 'cannot post user; ' +error.message })
    })
};

function getAllUsers( res,req) {
   user.find({}).then(function(data){
        res.status(200).json({success: true,data})
    }
    
    ).catch(function(error){
        res.status(404).json({success: false, message: 'cannot get all users; ' +error.message})
    })
};

module.exports = {postUsers, getAllUsers}