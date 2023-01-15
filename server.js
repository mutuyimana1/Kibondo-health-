const express = require("express");
const dbconnect = require("./database/dbconnect");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const errorHandler = require("./src/middleWare/error");
const cors = require("cors");
const userRoute = require("./src/routers/userRoutes");
const vaccineRoutes = require("./src/routers/vaccineRoutes");
const hospitalRoute = require("./src/routers/hospitalRoutes");
const measureRoutes = require("./src/routers/measureHealthRoutes");
const authRoute = require("./src/routers/auth");
const commentRoute = require("./src/routers/commentRoutes");
const babyRoute = require("./src/routers/baby");

const Nexmo = require("nexmo");
const adviceRoute = require("./src/routers/advice");
const blogRoute = require("./src/routers/blogs");
const parentRoute = require("./src/routers/parents");
const notificationRoute = require("./src/routers/notification");

const nexmo = new Nexmo({
  apiKey: "6a407695",
  apiSecret: "l3CsJm3BQ3dcfbei",
});

dotenv.config();
dbconnect();
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/user", userRoute);
app.use("/vaccine", vaccineRoutes);
app.use("/hospital", hospitalRoute);
app.use("/measure", measureRoutes);
app.use("/comment", commentRoute);
app.use("/auth", authRoute);
app.use("/baby", babyRoute);
app.use("/advice", adviceRoute);
app.use("/blog", blogRoute);
app.use("/parent", parentRoute);
app.use("/notification", notificationRoute);

app.use(errorHandler);

// running server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});

app.post("/sendsms", (req, res) => {
  const from = "vonage APIS";
  const number = req.body.number;
  const message = req.body.message;
  nexmo.message.sendSms(from, number, message);
});
