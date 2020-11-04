const express = require("express");
const employeeController = require("../controllers/employees");

const router = express.Router();

router.get("/", employeeController.fetchAllEmployees);
router.get("/employees/:employeeId", employeeController.fetchEmployee);

module.exports = router;
