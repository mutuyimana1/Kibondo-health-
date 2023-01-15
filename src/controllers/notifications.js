const notificationInfo = require("../models/notification");

class notificationController {
  static async createNotifications(req, res) {
    const notifications = await notificationInfo.create(req.body);
    if (!notifications) {
      return res.status(404).json({ error: "notifications not created" });
    }
    return res
      .status(200)
      .json({
        data: "notifications created successfully",
        data: notifications,
      });
  }

  static async getNotifications(req, res) {
    const allNotifications = await notificationInfo.find();
    if (!allNotifications) {
      return res
        .status(404)
        .json({ error: "not able to retrive notifications" });
    }
    return res
      .status(200)
      .json({
        data: "notificationt found successfully",
        data: allNotifications,
      });
  }

  static async getOneNotification(req, res) {
    const notification = await notificationInfo.findById(req.params.id);
    if (!notification) {
      return res.status(404).json({ error: "notification not found" });
    }
    return res
      .status(200)
      .json({ message: "notification found", data: notification });
  }
  static async updateOneNotification(req, res) {
    const notification = await notificationInfo.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!notification) {
      return res.status(404).json({ error: "notification update failed" });
    }
    return res
      .status(200)
      .json({
        message: "notification updated successfully",
        data: notification,
      });
  }
  static async deleteNotification(req, res) {
    const deletedNotification = await notificationInfo.findByIdAndDelete(
      req.params.id
    );
    if (!deletedNotification) {
      return res.status(404).json({ error: "notification not deleted " });
    }
    return res
      .status(200)
      .json({
        message: "notification deleted successfully",
        data: deletedNotification,
      });
  }
}

module.exports = notificationController;
