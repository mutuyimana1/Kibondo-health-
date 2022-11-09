// import express from "express";
const express = require("express");
const dbconnect = require("./database/dbconnect");
const dotenv = require("dotenv");
const morgan = require("morgan");
// const { model } = require("mongoose");
const userRoute = require("./src/routers/userRoutes");
const vaccineRoutes = require("./src/routers/vaccineRoutes");
const hospitalRoute = require("./src/routers/hospitalRoutes");
const measureRoutes = require("./src/routers/measureHealthRoutes");
const authRoute = require("./src/routers/auth");
const commentRoute = require("./src/routers/commentRoutes");

dotenv.config();
dbconnect();
const app = express();
app.use(morgan("dev"));

app.use(express.json());
app.use("/user", userRoute);
app.use("/vaccine", vaccineRoutes);
app.use("/hospital", hospitalRoute);
app.use("/measure", measureRoutes);
app.use("/comment", commentRoute);
app.use("/auth", authRoute);
app.get("/", (req, res) => {
  res.json({ message: "Hello there" });
});
// running server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});
