const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());
const config = require("./Config/DbConfig");

var methodOverride = require("method-override");
const path = require("path");

// Using pug template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  req.config = config;
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const employeeRouter = require("./Routes/employeeRoute");

// routing
app.use("/employee", employeeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
