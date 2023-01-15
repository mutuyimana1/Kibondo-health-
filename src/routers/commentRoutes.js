const commentController = require("../controllers/commentsController");
const Router = require("express");
const { authorize, protect } = require("../middleWare/auth");
const commentRoute = Router();
// commentRoute.use(protect);

commentRoute.post("/create", commentController.createComment);
commentRoute.get("/all", commentController.getComment);
commentRoute.get("/get/:id", commentController.getOneComment);
commentRoute.delete("/delete/:id", commentController.deleteComment);
module.exports = commentRoute;
