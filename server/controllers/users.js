

const express = require('express');
const app = express.Router();

app
    .get('/', (req, res) => {
        res.send('You are on the main route for teh USERS COntroller')
    })
    .get('/:id/:name', (req, res) => {
        res.send(`You are on the ${req.params.name} with ID: ${req.params.id} route in the USERS controller`);
    })

module.exports = app;