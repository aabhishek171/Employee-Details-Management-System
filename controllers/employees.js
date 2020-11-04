const Employee = require("../models/employees");
const employee = [];

exports.addEmployeeForm = (req, res, next) => {
  res.render("add-employee", {
    title: "Add Employees",
    path: "/admin/add-employee",
  });
};

exports.postAddEmployee = (req, res, next) => {
  const employees = new Employee(req.body);
  employees.add();
  res.redirect("/");
};

exports.fetchAllEmployees = (req, res, next) => {
  const employees = Employee.fetchAll((employees) => {
    res.render("employee", {
      emp: employees,
      title: "Home Page",
      path: "/",
    });
  });
};

exports.fetchEmployee = (req, res, next) => {
  const empId = req.params.employeeId;
  Employee.fetchById(empId, (employee) => {
    res.render("employee-details", {
      emp: employee,
      title: "Employee Details",
      path: "/employees/id",
    });
  });
};
