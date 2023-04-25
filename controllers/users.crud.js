const db = require('../models');
const User = require('../models/users');
const Op = require('sequelize');

function createUser( req, res, next ) {
    const user = {
        name: req.body.name,
        surname: req.body.surname,
        Date: req.body.Date
        //creationDate: Date.now()
    };

    User.create(user).then((data) => {
        res.send(data);
    }).catch((error) => {
        console.error('Failed to create user ', error);
    });
};

function getAllUsers( req, res, next ) {

    User.findAll({
        where: { }
    }).then(data => {
        console.log(data)
        res.send(data)
    }).catch((error) => {
        console.error('Failed to retrieve data ', error);
    });
}

function deleteUser( req, res, next ) {
    const deleteId = req.params.id;

    User.destroy({
        where: {id: deleteId}
    }).then( rows => {
        if ( rows == 1 ) {
            res.send({
                message: "User removed."
            });
        } else {
            res.send({
                message: "User not found."
            })
        }
    });
}

function deleteAllUsers( req, res, next ) {
    User.destroy({
        where: { },
        truncate: true
    }).then( rows => {
        res.send({
            message: 'All users have been deleted. Number of users deleted:', rows
        });
    }).catch((error) => {
        console.error('Failed to delete all data:', error);
    });
}

module.exports.createUser = createUser;
module.exports.getAllUsers = getAllUsers;
module.exports.deleteUser = deleteUser;
module.exports.deleteAllUsers = deleteAllUsers;