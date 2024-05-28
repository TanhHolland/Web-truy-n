var express = require('express');
var router = express.Router();


var Products = require('../controllers/productController')

router.get('/:product',Products.GetLinkProductDetail);

// Exports
module.exports = router;