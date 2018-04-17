var express = require('express');

var eventList = require('../data/eventList');

var router = express.Router();

router.get('/events', function(req, res) {
    res.json(eventList);
});

module.exports = router;