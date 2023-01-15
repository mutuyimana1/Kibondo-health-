const healthMeasure = require("../models/healthMeasure");
const parentInfo = require("../models/parents");
const notificationInfo = require("../models/notification");

const blogs = require("../models/blogs");
const ErrorResponse = require("../helpers/errorResponse");
class healthMeasureController {
  static async measureHealth(req, res, next) {
    const { gender, weight, height, age } = req.body;
    if (gender == "" || weight == "" || height == "" || age == "") {
      return next(new ErrorResponse("invalid input", 400));
    } else {
      const measure = await healthMeasure.create({
        gender,
        weight,
        height,
        age,
      });
      if (!measure) {
        return res.status(404).json({ error: "measure not found" });
      }
      //weight are measured in pounds and height are measured in inches
      const x = measure.weight * 703;
      const y = measure.height * measure.height;
      const BMI_Percentile = x / y;
      if (BMI_Percentile < 5) {
        const message = "your child is underweight";
        const data = measure;
        let readBlog;

        const blog = await blogs.find();
        for (let i = 0; i < blog.length; i++) {
          if (message.includes(blog[i].searchKeyword)) {
            console.log(blog[i].searchKeyword);
            readBlog = blog[i]._doc;
          }
        }
        const compareNumber = await parentInfo.find({
          telephone: req.body.telephone,
        });
        const notifications = await notificationInfo.create({
          status: "underWeight",
          notificationContent: "baby is underweighted ",
          to: compareNumber.hospital,
        });
        notifications.save();
        return res.status(200).json({
          message,
          data,
          BMI_Percentile,
          readBlog,
        });
      } else if (BMI_Percentile == 5 || BMI_Percentile <= 85) {
        let readBlog;
        const message = "Waooo!! your child is healthly";
        const blog = await blogs.find();
        for (let i = 0; i < blog.length; i++) {
          if (message.includes(blog[i].searchKeyword)) {
            readBlog = blog[i];
          }
        }
        return res.status(200).json({
          message,
          data: measure,
          BMI_Percentile,
          readBlog,
        });
      } else {
        const message = "your child is overweight";
        let readBlog;
        const blog = await blogs.find();
        for (let i = 0; i < blog.length; i++) {
          if (message.includes(blog[i].searchKeyword)) {
            readBlog = blog[i];
          }
        }

        const compareNumber = await parentInfo.findOne({
          telephone: req.body.telephone,
        });
        const notifications = await notificationInfo.create({
          status: "over weight",
          notificationContent: "baby is overweighted ",
          to: compareNumber.hospital,
        });
        notifications.save();
        // console.log(compareNumber);
        // console.log(req.body);

        res.status(200).json({
          message,
          data: measure,
          BMI_Percentile,
          advice: "visit this link",
          readBlog,
        });
      }
    }
  }
}
module.exports = healthMeasureController;
