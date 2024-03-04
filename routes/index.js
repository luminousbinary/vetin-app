const express = require("express");

const appointmentController = require("../controllers/appointment");
const slotController = require("../controllers/slots");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: " express is running " });
});

router.get("/appointments", appointmentController.all);
router.get("/retrieveSlots", slotController.all);
router.post("/appointmentCreate", appointmentController.create);

module.exports = router;
