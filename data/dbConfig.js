const knex = require('knex')
const knexfile = require('../knexfile.js')
const environment = process.env.NODE_ENV || 'development'

//TODO: REMEMBER TO CHANGE THE ENVIRONMENT BACK WHEN DONE TESTING
module.exports = knex(knexfile[environment])