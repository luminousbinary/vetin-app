// if (process.env.NODE_ENV !== "production") {
// require("dotenv").config();
// }
const express = require("express");
const mongoose = require("mongoose");
const expressLayout = require("express-ejs-layouts");
const appointmentRoute = require("./controller/appointment.controller");

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layout/layout");

app.use(express.json());
app.use(expressLayout);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
mongoose.connect(
  "mongodb+srv://vet-in-admin:eECaaFywG9AF5yNV@vet-in.hulw6ux.mongodb.net/?retryWrites=true&w=majority&appName=vet-in"
);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database connected"));

app.get("/", (req, res) => {
  res.send("hellp");
});

app.use("/appointment", appointmentRoute);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Connected to server at port ${PORT}`);
});

module.exports = app;
