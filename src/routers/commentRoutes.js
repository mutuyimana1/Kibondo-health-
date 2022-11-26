const commentController = require("../controllers/commentsController");
const Router = require("express");

const commentRoute = Router();

commentRoute.post("/create", commentController.createComment);

module.exports = commentRoute;
