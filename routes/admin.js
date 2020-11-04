const express = require("express");
const employeeController = require("../controllers/employees");
const router = express.Router();

router.get("/add-employee", employeeController.addEmployeeForm);
router.post("/employees", employeeController.postAddEmployee);

module.exports = router;
