const { Router } = require("express");
const vaccineController = require("../controllers/vaccineController");
const { protect, authorize } = require("../middleWare/auth");
const vaccineRoutes = Router();

vaccineRoutes.use(protect);

vaccineRoutes.post(
  "/register",
  authorize("admin"),
  vaccineController.createVaccine
);
vaccineRoutes.get("/vaccines", vaccineController.getAllVaccine);
vaccineRoutes.get("/:id", vaccineController.getOneVaccine);
vaccineRoutes.delete("/delete/:id", vaccineController.deleteVaccine);
vaccineRoutes.patch("/update/:id", vaccineController.updateVaccine);

module.exports = vaccineRoutes;
