exports.index = (req, res, next) => {
  res.status(200).json({
    data: [
      { id: 1, name: "Bob" },
      { id: 2, name: "John" },
    ],
  });
};

exports.login = function (req, res, next) {
  res.status(200).json({ message: "Hello Login!!" });
};
