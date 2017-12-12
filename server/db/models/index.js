'use strict';

const Campus = require('./Campus');
const Student = require('./Student');
// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// Exporting all models from here seems like a good idea!

Campus.hasMany(Student, {
	foreignKey: {
	  field: 'id',
	  allowNull: false
	},
	onDelete: 'cascade'
  })
// This is also probably a good place for you to set up your associations
Student.belongsTo(Campus)
module.exports = {Campus, Student}