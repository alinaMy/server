export const postSum = (req, res) => {
  let sum = req.body.a + req.body.b;
  res.status(200).json({sum});
};
export const postSub = (req, res) => {
    let sub = req.body.a  - req.body.b;
    res.status(200).json({sub});
};
export const postMult = (req, res) => {
    let mult = req.body.a * req.body.b;
    res.status(200).json({mult});
};
export const postDiv = (req, res) => {
    let div = req.body.a / req.body.b;
    res.status(200).json({div});
};

export const getCalc = (req, res) => {
    res.status(200).json('Welcome to Calculator');
};
