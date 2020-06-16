exports.index = (req, res, next) => {
  res.status(200).json({
    data: {
      name: "ABX engineering",
      address: {
        province: "bangkok",
        postcode: 10230,
      },
    },
  });
};
