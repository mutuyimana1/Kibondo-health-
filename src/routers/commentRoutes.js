const commentController = require("../controllers/commentsController");
const Router = require("express");
const verifyToken = require("../middleWare/verifyToken");
const verifyAccess = require("../middleWare/verifyAccess");

const commentRoute = Router();

commentRoute.post(
  "/create",
  verifyToken,
  verifyAccess("admin"),
  commentController.createComment
);
commentRoute.get("/all", commentController.getComment);
commentRoute.get(
  "/get/:id",
  verifyToken,
  verifyAccess("admin"),
  commentController.getOneComment
);
commentRoute.delete(
  "/delete/:id",
  verifyToken,
  verifyAccess("admin"),
  commentController.deleteComment
);
module.exports = commentRoute;
