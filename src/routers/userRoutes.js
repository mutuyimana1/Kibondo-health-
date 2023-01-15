const { Router, application } = require("express");
const userController = require("../controllers/userController");
const { protect, authorize } = require("../middleWare/auth");

const userRoute = Router();
// userRoute.use(protect, authorize("admin"));

userRoute.get("/all", userController.getAllUsers);
userRoute.get("/:id", userController.getOneUser);
userRoute.delete("/delete/:id", userController.deleteUser);
userRoute.patch("/update/:id", userController.updateUser);

module.exports = userRoute;
