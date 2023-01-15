const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  status: String,
  notificationContent: String,
  to: String,
});
const notifications = mongoose.model("notification", notificationSchema);
module.exports = notifications;
