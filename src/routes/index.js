const express = require('express');

const router = express.Router();

var data = [];

router.get('/', (req, res) => {
    res.send('Success');
});

router.post('/', (req, res) => {
    data.push(req.json());

    res.send('Received');
});

router.put('/', (req, res) => {
    data = data.concat(req.body);

    res.send('Received, updated');
});

router.delete('/', (req, res) => {
    data = [];

    res.send('Received, deleted');
});

module.exports = router;