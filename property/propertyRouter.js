const express = require('express');
const router = express.Router();
const Property = require('./propertyModel.js')


//TODO GET all property ---- /api/property
router.get('/', (req,res) => {
     Property
     .findAll()
     .then(properties => {
          res.status(201).json(properties)
     })
})

//TODO GET property by ID ---- /api/property/:id
router.get('/:id', (req,res) => {
     const id = req.params.id;

     Property
     .findById(id)
     .then(property => {
          res.status(201).json(property)
     })
})


//TODO DELETE property ---- /api/property/:id
router.delete('/:id', (req,res) => {
     const id = req.params.id;

     Property
     .remove(id)
     .then(deleted => {
          res.status(201).json(deleted)
     })
})

//TODO UPDATE property ---- /api/property/:id
router.put('/:id', (req,res) => {
     const id = req.params.id;
     const updateProp = req.body;

     Property
     .update(id, updateProp)
     .then(updated => {
          res.status(201).json(updated)
     })
})

module.exports = router;