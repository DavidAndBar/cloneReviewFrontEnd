// This file is the manipulator of routes.

const express = require('express');
const Users = require('../models/users')
const router = express.Router();

// Get all the users saved
router.get('/getall', async (req, res) => {
    const docs_users = await Users.find();
    res.send(docs_users) 
})

// Create users
router.post('/usersignup', (req, res) => {
    console.log(req.body);
    const user = new Users(req.body);
    user.save()
    .then(result => res.json(result))
    .catch(error => res.json(error));
})

// Get one specific user: 
router.get('/getone/:id', (req, res) => {
    const id = req.params.id;
    Users.findById(id)
    .then(user => res.json(user))
    .catch(error => res.json(error))
    /*try {
        const user = await Users.findById(id);
        res.json(user ? user : "");
    } catch (error) {
        res.json({message: error})
    }*/
    
})


module.exports = router;