const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const storeRoutes = require("./routes/employee");

const app = express(); 

app.set("view engine", "ejs");
app.set("views", "Views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use("/admin", adminRoutes);

app.use(employeeRoutes);

app.use((req, res, next) => {
  res.render("404", { title: "Error" });
});