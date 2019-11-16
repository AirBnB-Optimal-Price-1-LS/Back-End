const express = require('express')
const router = express.Router()
const Users = require('./usersModel.js')

//TODO GET all users ---- /api/users
router.get('/', (req, res) => {
     Users
     .findAll()
     .then(users => {
          res.status(201).json(users)
     })
     .catch(error => {
          res.status(500).json({message: "Unable to retrieve all users. Please try again later."})
     })
})

//TODO GET user by ID ---- /api/users/:id
router.get('/:id', (req, res) => {
     const id = req.params.id;

     Users
     .findById(id)
     .then(user => {
          res.status(201).json(user)
     })
     .catch(error => {
          res.status(500).json({message: "Unable to retrieve user. Please try again later."})
     })
})


//TODO DELETE user ---- /api/users/:id
router.delete('/:id', (req, res) => {
     Users
     .remove(id)
     .then(deleted => {
          res.status(200).json(deleted)
     })
     .catch(error => {
          res.status(500).json({message: "Unable to delete user. Please try again later."})
     })
})

//TODO UPDATE user ---- /api/users/:id
router.put('/:id', (req, res) => {
     Users
     .update(id)
     .then(updated => {
          res.status(200).json(updated)
     })
     .catch(error => {
          res.status(500).json({message: "Unable to update user. Please try again later."})
     })
})


module.exports = router;