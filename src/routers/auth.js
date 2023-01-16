const router = require("express").Router();
const {
  createUser,
  userLogin,
  logout,
  updateDetails,
  updatePassword,
  resetPassword,
} = require("../controllers/auth");
const { protect } = require("../middleWare/auth");

router.post("/register", createUser);
router.post("/login", userLogin);
router.get("/logout", logout);
router.put("/updatedetails", protect, updateDetails);
router.put("/updatepassword", protect, updatePassword);

router.put("/resetpassword/:resettoken", resetPassword);

module.exports = router;
