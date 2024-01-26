const jwt = require("jsonwebtoken");
const User = require("../Model/userModel");
const bcrypt = require("bcryptjs");

const bcryptSalt = bcrypt.genSaltSync(10);

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  });

  //Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    user
  });
};

exports.signUp = async (req, res, next) => {
  const { name, role, email, password } = req.body;
  try {
    const newUser = await User.create({
      name,
      role,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.status(200).json(newUser);
  } catch (e) {
    res.status(422).json(e);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      createSendToken(userDoc, 200, req, res);
    } else {
      res.status(422).json("password or email not ok");
    }
  } else {
    res.status(404).json("not found");
  }

};
