const express = require("express");
const dbconnect = require("./database/dbconnect");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const errorHandler = require("./src/middleWare/error");

const userRoute = require("./src/routers/userRoutes");
const vaccineRoutes = require("./src/routers/vaccineRoutes");
const hospitalRoute = require("./src/routers/hospitalRoutes");
const measureRoutes = require("./src/routers/measureHealthRoutes");
const authRoute = require("./src/routers/auth");
const commentRoute = require("./src/routers/commentRoutes");

dotenv.config();
dbconnect();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/user", userRoute);
app.use("/vaccine", vaccineRoutes);
app.use("/hospital", hospitalRoute);
app.use("/measure", measureRoutes);
app.use("/comment", commentRoute);
app.use("/auth", authRoute);

app.use(errorHandler);
// running server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});
