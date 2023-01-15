const parentController = require("../controllers/parents");
const Router = require("express");
const { authorize, protect } = require("../middleWare/auth");
const parentRoute = Router();
// parentRoute.use(protect);

parentRoute.post("/create", parentController.createParent);
parentRoute.get("/all", parentController.getParents);
parentRoute.get("/get/:id", parentController.getOneParent);
parentRoute.patch("/update/:id", parentController.updateOneParent);
parentRoute.delete(
  "/delete/:id",
  //   authorize("admin"),
  parentController.deleteParent
);
module.exports = parentRoute;
