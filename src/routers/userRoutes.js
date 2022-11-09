const { Router } = require("express");
const userController = require("../controllers/userController");

const userRoute = Router();

// userRoute.post("/register", function (req, res) {
//   userController.CreateUser;
// });

userRoute.post("/register", userController.createUser);
userRoute.get("/all", userController.getAllUsers);
userRoute.get("/:id", userController.getOneUser);
userRoute.delete("/delete/:id", userController.deleteUser);
userRoute.patch("/update/:id", userController.updateUser);
userRoute.post("/login", userController.userLogin);
module.exports = userRoute;
