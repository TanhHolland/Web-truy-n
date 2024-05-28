var express = require('express');
var router = express.Router();


var Comment = require('../controllers/commentController');

var admin = require('../config/admin');
var isUser = admin.isUser;

router.post('/:product/chapter/:name',Comment.postComments);


// Exports
module.exports = router;