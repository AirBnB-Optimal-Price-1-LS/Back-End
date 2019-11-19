const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('../users/usersModel.js');
const validateUser = require('../users/usersHelpers.js')

//TODO POST new user ---- /api/auth/register
router.post('/register', (req,res) => {
     const newUser = req.body;

     const authenticatedUser = validateUser(newUser)

     if(authenticatedUser.isSuccessful === true){
          // TODO: CHANGED HASH FROM 12 to 8
          const hash = bcrypt.hashSync(newUser.password, 8);
          newUser.password = hash;

          Users
          .insert(newUser)
          .then(response => {
               res.status(201).json(response)
          })
          .catch(error => {
               res.status(500).json({message: "Unable to register new user. Please try again later."})
          })
     } else {
          res.status(401).json({message: "Please provide valid user credentials."})
     }
})

//TODO POST login user --- /api/auth/login
router.post('/login', (req,res) => {
     let { username, password } = req.body;

     Users
     .findByUser(username)
     .then(user => {
          if(user && bcrypt.compareSync(password, user.password)){
               const token = getJwtToken(user.username)

               res.status(201).json({
                    message: `Welcome ${user.username}`,
                    user_id:user.id,
                    token
               })
          } else {
               res.status(401).json({message: "Invalid credentials. Please try again"})
          }
     })
     .catch(error => {
          res.status(500).json({message: "Please provide valid user credentials."})
     })
})



function getJwtToken(username){
     const payload = {
          username
     }
     const secret = process.env.JWT_SECRET || 'willy wonka'
     const options = {
          expiresIn: '1d'
     }
     return jwt.sign(payload, secret, options)
}

module.exports = router;