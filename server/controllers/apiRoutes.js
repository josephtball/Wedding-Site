var express = require('express');

var events = require('../data/events');

var router = express.Router();

router.get('/events', function(req, res) {
    res.json(events);
});

module.exports = router;