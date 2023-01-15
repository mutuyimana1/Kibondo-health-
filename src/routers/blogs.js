const blogController = require("../controllers/blogs");
const Router = require("express");
const { authorize, protect } = require("../middleWare/auth");
const blogRoute = Router();
// blogRoute.use(protect);

blogRoute.post("/create", blogController.createBlog);
blogRoute.get("/:category", blogController.getBlogs);
blogRoute.get("/get/:id", blogController.getOneBlog);
blogRoute.patch("/update/:id", blogController.updateOneBlog);
blogRoute.delete("/delete/:id", blogController.deleteBlog);
module.exports = blogRoute;
