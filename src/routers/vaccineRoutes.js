const { Router } = require("express");
const vaccineController = require("../controllers/vaccineController");

const vaccineRoutes = Router();

vaccineRoutes.post("/register", vaccineController.createVaccine);
vaccineRoutes.get("/vaccines", vaccineController.getAllVaccine);
vaccineRoutes.get("/:id", vaccineController.getOneVaccine);
vaccineRoutes.delete("/delete/:id", vaccineController.deleteVaccine);
vaccineRoutes.patch("/update/:id", vaccineController.updateVaccine);

module.exports = vaccineRoutes;
