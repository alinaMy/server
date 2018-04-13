'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _calcControllers = require('./calcControllers');

const router = (0, _express.Router)();

router.post('/sum', _calcControllers.postSum);
router.post('/sub', _calcControllers.postSub);
router.post('/mult', _calcControllers.postMult);
router.post('/div', _calcControllers.postDiv);

exports.default = router;