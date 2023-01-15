const notificationController = require("../controllers/notifications");
const Router = require("express");
const { authorize, protect } = require("../middleWare/auth");
const notificationRoute = Router();
// notificationRoute.use(protect);

notificationRoute.post("/create", notificationController.createNotifications);
notificationRoute.get("/all", notificationController.getNotifications);
notificationRoute.get("/get/:id", notificationController.getOneNotification);
notificationRoute.patch(
  "/update/:id",
  notificationController.updateOneNotification
);
notificationRoute.delete(
  "/delete/:id",

  notificationController.deleteNotification
);
module.exports = notificationRoute;
