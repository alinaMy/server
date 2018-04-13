'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const message = {};

message.success = (text, payload) => ({
  message: {
    text,
    type: 'success'
  },
  payload
});

message.error = (text, payload) => ({
  message: {
    text,
    type: 'error'
  },
  payload
});

exports.default = message;