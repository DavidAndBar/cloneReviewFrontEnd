const express = require('express');
const Users = require('../models/users')
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello world from backTest");
})

router.get('/getall', async (req, res) => {
    const docs_users = await Users.find();
    res.send(docs_users) 
})

module.exports = router;