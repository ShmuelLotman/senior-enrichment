'use strict'
const chalk = require('chalk');
const Sequelize = require('sequelize');


console.log(chalk.yellow("Opening database connection"));

// create the database instance that can be used in other database files
module.exports = new Sequelize('postgres://localhost:5432/shmuel_enrichment_proj', {
  logging: false, // so we don't see all the SQL query made
  native: true
});

// don't forget to run our models files and make all associations for our Sequelize objects (if you do it here consider circular references)
require('./models');