const Router = require("express");

const healthMeasureController = require("../controllers/healthMeasureController");
const { protect } = require("../middleWare/auth");

const measureRoute = Router();

measureRoute.post("/fill", healthMeasureController.measureHealth);

module.exports = measureRoute;
