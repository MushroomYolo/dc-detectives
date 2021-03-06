const register = require('../lib/register');

var express = require('express');
var router = express.Router();

router.get('/latest/:amount?', async function(req, res, next) {
    let amount = req.params.amount;

    amount = !amount ? 8 : amount;

    res.send({ latestOrders: await register.getLatestExecutiveOrders(amount) });
    // res.send({ latestOrders: 'yeet' });
});

module.exports = router;