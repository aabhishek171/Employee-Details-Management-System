const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data", "employees.json");

const getEmployeesFromFile = (cb) => {
  fs.readFile(filePath, (err, data) => {
    if (err) return cb([]);
    else return cb(JSON.parse(data));
  });
};

class Employee {
  constructor(obj) {
    this.name = obj.name;
    this.email = obj.email;
    this.phone = obj.phone;
    this.city = obj.city;
    this.dob = obj.dob;
  }

  add() {
    fs.readFile(filePath, (err, data) => {
      let employees = [];
      if (!err) {
        employees = JSON.parse(data);
      }

      this.id = Math.random().toString();
      employees.push(this);
      fs.writeFile(filePath, JSON.stringify(employees), (err) => {
        if (err) console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getEmployeesFromFile(cb);
  }

  static fetchById(id, cb) {
    getEmployeesFromFile((employees) => {
      const employee = employees.filter((e) => {
        return e.id === id;
      });
      cb(employee);
    });
  }
}

module.exports = Employee;
