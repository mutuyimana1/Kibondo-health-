const adviceController = require("../controllers/adviceController");
const Router = require("express");
const { authorize, protect } = require("../middleWare/auth");
const adviceRoute = Router();
adviceRoute.use(protect);

adviceRoute.post("/create", authorize("admin"), adviceController.createAdvices);
adviceRoute.get("/all", adviceController.getAdvices);
adviceRoute.get("/get/:id", adviceController.getOneAdvice);
adviceRoute.patch("/update/:id", adviceController.updateOneAdvice);
adviceRoute.delete(
  "/delete/:id",
  authorize("admin"),
  adviceController.deleteAdvice
);
module.exports = adviceRoute;
