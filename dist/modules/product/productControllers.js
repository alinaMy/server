'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productCreate = productCreate;
exports.productUpdateById = productUpdateById;
const productLoadAll = exports.productLoadAll = (req, res) => {
  const product = {
    title: 'Box 456',
    price: 789
  };

  res.status(200).json(product);
};

async function productCreate(req, res) {
  console.log(req.body);

  const product = {
    title: 'Box 456',
    price: 789,
    id: req.body.id
  };

  res.status(200).json(product);
}

async function productUpdateById(req, res) {
  res.status(200).json('OK productUpdateById');
}

const productDeleteById = exports.productDeleteById = (req, res) => {
  res.status(200).json('OK productDeleteById');
};

const getSum = exports.getSum = (req, res) => {

  res.status(200).json('sum');
};
const postSum = exports.postSum = (req, res) => {
  let sum = req.body.a + req.body.b;
  res.status(200).json({ sum });
};