const express = require('express');
const configureMiddleware = require('./configurationMiddleware.js')
const restrictedAuth = require('../auth/restrictedAuthMiddleware.js')

const usersRouter = require('../users/usersRouter.js')
const propertyRouter = require('../property/propertyRouter.js')
const authRouter = require('../auth/authRouter.js')

const server = express();
configureMiddleware(server);

server.use('/api/auth', authRouter)
server.use('/api/users', restrictedAuth, usersRouter)
server.use('/api/property', restrictedAuth, propertyRouter)

server.get('/', (req,res) => {
     res.send("Hello, you are at the root of the server")
})


module.exports = server;