"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const postSum = exports.postSum = (req, res) => {
    let sum = req.body.a + req.body.b;
    res.status(200).json({ sum });
};
const postSub = exports.postSub = (req, res) => {
    let sub = req.body.a - req.body.b;
    res.status(200).json({ sub });
};
const postMult = exports.postMult = (req, res) => {
    let mult = req.body.a * req.body.b;
    res.status(200).json({ mult });
};
const postDiv = exports.postDiv = (req, res) => {
    let div = req.body.a / req.body.b;
    res.status(200).json({ div });
};