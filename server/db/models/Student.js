const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    }, 
    gpa: {
        type: Sequelize.DECIMAL
    }
}, {
    getterMethods: {
        fullName() {
            return this.firstName + ' ' + this.lastName
        }
    }
})