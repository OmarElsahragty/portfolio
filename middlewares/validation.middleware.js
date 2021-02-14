checkEmail = (req, res, next) => {
  if (!req.body.email) {
    res.status(400).json({
      message: "Failed, required email address",
    });
    return;
  }
  const RegularExpression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!RegularExpression.test(String(req.body.email).toLowerCase())) {
    res.status(400).json({
      message: "Failed, Wrong email address",
    });
    return;
  }

  next();
};

module.exports = {
  checkEmail,
};
