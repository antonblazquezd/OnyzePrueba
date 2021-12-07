const express = require('express');
const router = express.Router();

const customerControler = require('../controllers/customerControllers');

router.get('/', customerControler.list);

module.exports = router;