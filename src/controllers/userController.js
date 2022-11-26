const userInfos = require("../models/User");
const bcrypt = require("bcrypt");
const TokenAuth = require("../helpers/tokenAuth");
class userController {
  //create user account
  // static async createUser(req, res) {
  //   try {
  //     let { password, ...others } = req.body;
  //     const salt = await bcrypt.genSalt(10);
  //     const hashedPwd = await bcrypt.hash(password, salt);
  //     password = hashedPwd;

  //     const user = await userInfos.create({ password, ...others });
  //     if (!user) {
  //       return res.status(403).json({ error: "create user failed" });
  //     }
  //     return res
  //       .status(200)
  //       .json({ message: "user created successfully", data: user });
  //   } catch (error) {
  //     res.status(400).json(error);
  //   }
  // }

  // Login
  // static async userLogin(req, res, next) {
  //   const { email, password } = req.body;

  //   // Validate email & password
  //   if (!email || !password) {
  //     return res.status(400).json("Please provide an email and password");
  //   }

  //   const user = await userInfos.findOne({ email: email });
  //   const passwordMatch =
  //     user && (await bcrypt.compare(password, user.password));

  //   if (!passwordMatch) {
  //     return res.status(401).json({
  //       message: "Invalid Credentials ",
  //     });
  //   }
  //   const token = TokenAuth.tokenGenerator({
  //     id: user._id,
  //     email: user.email,
  //     role: user.role,
  //   });
  //   return res.status(200).json({
  //     status: 200,
  //     message: "Login successfully",
  //     token: token,
  //     data: user,
  //   });
  // }
  static async getAllUsers(req, res) {
    const users = await userInfos.find();
    if (!users) {
      return res.status(404).json({ fail: "failed to gerate users" });
    }
    return res
      .status(200)
      .json({
        message: "users found successfully",
        count: users.length,
        data: users,
      });
  }

  static async getOneUser(req, res) {
    const user = await userInfos.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ fail: "user not found" });
    }
    return res
      .status(200)
      .json({ message: "user found successfully", data: user });
  }

  static async deleteUser(req, res) {
    const deleteuser = await userInfos.findByIdAndDelete(req.params.id);

    if (!deleteuser) {
      return res.status(404).json({ error: "user not deleted" });
    }
    return res
      .status(200)
      .json({ message: "user deleted successfully", data: deleteuser });
  }
  static async updateUser(req, res) {
    const userUpdate = await userInfos.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!userUpdate) {
      return res.status(404).json({ error: "user not updated" });
    }
    return res
      .status(200)
      .json({ message: "user Updated successfully", data: userUpdate });
  }
}

module.exports = userController;
