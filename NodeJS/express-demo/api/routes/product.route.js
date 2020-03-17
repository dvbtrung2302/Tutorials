var express = require('express');

var controller = require('../controllers/product.controller');
var router = express.Router();

router.get('/', controller.index);

router.post('/', controller.create);

router.get('/:id', controller.get);

router.patch('/:id', controller.update);

router.delete('/:id', controller.delete);
module.exports = router;