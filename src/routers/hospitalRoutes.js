const { Router } = require("express");
const hospitalController = require("../controllers/hospitalController");

const hospitalRoute = Router();

hospitalRoute.post("/register", hospitalController.createHospital);

hospitalRoute.get("/hospitals", hospitalController.getAllHospital);
hospitalRoute.get(
  "/hospitals/:district",
  hospitalController.getHospitalInDistrict
);
hospitalRoute.get("/:id", hospitalController.getOneHospital);
hospitalRoute.delete("/delete/:id", hospitalController.deleteHospital);
hospitalRoute.patch("/update/:id", hospitalController.updateHospital);

module.exports = hospitalRoute;
