'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _productControllers = require('./productControllers');

const router = (0, _express.Router)();

router.get('/', _productControllers.productLoadAll);
router.post('/', _productControllers.productCreate);
router.patch('/:productId', _productControllers.productUpdateById);
router.delete('/:productId', _productControllers.productDeleteById);
router.get('/sum', _productControllers.getSum);
router.post('/sum', _productControllers.postSum);

exports.default = router;