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

module.exports = commentRoute;
