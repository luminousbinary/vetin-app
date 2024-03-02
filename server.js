// const  express = require("express")
// const app = express()

// app.set('view engine', 'ejs')

// const port = 3000

// // server page
// app.get('/appointment', (req, res) => {
//   res.render('index')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const mongoose = require("mongoose");
const expressLayout = require("express-ejs-layouts");

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layout/layout");

app.use(express.json());
app.use(expressLayout);
app.use(express.static("public"));

mongoose.connect(process.env.DATABASEURL);
// .then(() => console.log("Database connected"));

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database connected"));
const appointmentRoute = require("./controller/appointment-controller");

app.use("/appointment", appointmentRoute);
port = 3000;

app.listen(port, () => {
  console.log(`Connected to server at port ${port}`);
});
