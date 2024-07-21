const UserModel = require("../models/user.model");

exports.newUser = async (req, res) => {
  try {
    const { name, surname, sex } = req.body;
    let newUser = {
      name,
      surname,
      sex,
    };
    const user = new UserModel(createObj);
    user.save();
  } catch (e) {
    console.log(e);
  }
};

exports.getAllRequest = async (req, res) => {
  UserModel.find({}, function (err, users) {
    console.log(users);
    res.status(200).json(users);
  });
};
