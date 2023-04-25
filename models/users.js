const { Sequilize, DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER(3),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    Date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

module.exports = User;