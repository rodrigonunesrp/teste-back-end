const express = require('express');

const router = express.Router();

router
    .get('/home', (req, res) => {
        res.render('home');
    })

    .get('/sobre', (req, res) => {
        res.render('sobre');
    })

    .get('/contato', (req, res) => {
        res.render('contato');
    })

    .get('/', (req, res) => {
        res.redirect('/home');
    });
  
module.exports = router;