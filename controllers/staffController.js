const Staff = require("../models/staff");

exports.index = async (req, res, next) => {
  // *get database ทั้งหมด  .find().sort({_id: -1})
  const staff = await Staff.find().sort({ _id: -1 });
  res.status(200).json({
    data: staff,
  });
};
// Find Data{id}
exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;
    // *const staff = await Staff.findOne({_id: req.params.id})
    // *const staff = await Staff.findOne({_id: id})
    const staff = await Staff.findById(id);

    if (!staff) {
      throw new Error("Not Found staff id");
    }

    res.status(200).json({
      data: staff,
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: "Bad Gateway " + error.message,
      },
    });
  }
};

// Add Insert POST Data...insert
exports.insert = async (req, res, next) => {
  // *Destructuring  ES {data: name}
  const { name, salary, address } = req.body;
  // *save database ทั้ง body
  // *let staff = new Staff(req.body);
  let staff = new Staff({
    name: name,
    salary: salary,
    address: address,
  });
  await staff.save();

  res.status(201).json({
    message: "Inserted Data!",
    //{data: address} status:201
  });
};

// Delete Data deleteOne
exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;

    const staff = await Staff.deleteOne({ _id: id });

    if (staff.deletedCount === 0) {
      throw new Error("Can't Delete staff id");
    } else {
      res.status(200).json({
        message: "Deleted!!",
      });
    }

    console.log(staff);
  } catch (error) {
    res.status(400).json({
      error: {
        message: "Bad Gateway " + error.message,
      },
    });
  }
};
