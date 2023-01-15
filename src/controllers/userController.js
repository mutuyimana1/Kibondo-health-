const userInfos = require("../models/User");
const bcrypt = require("bcrypt");

class userController {
  static async getAllUsers(req, res) {
    const users = await userInfos.find();
    if (!users) {
      return res.status(404).json({ fail: "failed to gerate users" });
    }
    return res.status(200).json({
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
