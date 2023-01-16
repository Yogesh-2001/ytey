const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
} = require("../controllers/adminCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//GET METHOD || USERS
router.post("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || DOCTORS
router.post("/getAllDoctors", authMiddleware, getAllDoctorsController);

module.exports = router;
