'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _calcRoutes = require('./modules/calc/calcRoutes');

var _calcRoutes2 = _interopRequireDefault(_calcRoutes);

var _productRoutes = require('./modules/product/productRoutes');

var _productRoutes2 = _interopRequireDefault(_productRoutes);

var _messages = require('./modules/messages/messages');

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
const cool = require('cool-ascii-faces');
const PORT = process.env.PORT || 5000;

app.get('/cool', (req, res) => res.send(cool()));

// ===== LOGGER =====
app.use((0, _morgan2.default)('dev'));

// ===== PARSE RESPONSE =====
app.use(_bodyParser2.default.urlencoded({ extended: false })); // support encoded bodies
app.use(_bodyParser2.default.json()); // support json encoded bodies

// ===== CORS =====
app.use((req, res, next) => {
  // eslint-disable-line consistent-return
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// ===== ROUTING =====
app.use('/product', _productRoutes2.default);
app.use('/calc', _calcRoutes2.default);

// ===== ERROR HANDLING =====
app.use((req, res, next) => res.status(404).json(_messages2.default.error('API not found'))); // eslint-disable-line no-unused-vars

app.use((error, req, res, next) => {
  // eslint-disable-line no-unused-vars
  res.status(error.status || 500);
  res.json(_messages2.default.error(error.message));
});

// ===== PORT =====
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});