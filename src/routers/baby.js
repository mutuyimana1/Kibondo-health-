const Router = require("express");
const babyController = require("../controllers/baby");
const { authorize, protect } = require("../middleWare/auth");
const babyRoute = Router();
// babyRoute.use(protect);

babyRoute.post("/create", babyController.createbaby);
babyRoute.get("/all", babyController.getAllbaby);
babyRoute.get("/get/:id", babyController.getOnebaby);
babyRoute.patch("/get/:id", babyController.updatebaby);
babyRoute.delete("/delete/:id", babyController.deletebaby);
babyRoute.post("/vaccine/:id", babyController.addVaccine);
babyRoute.get("/vaccine/:id", babyController.getVaccine);
babyRoute.post("/vaccine", babyController.getAllVaccine);
module.exports = babyRoute;
