const express = require("express");
const router = express.Router();
const Appointment = require("../model/appoinrment");
const Vendor = require("../model/vendor");
const User = require("../model/user");

async function popluDb() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  if (data) {
    // //  console.log(data);
    // const appointment = data.users.forEach((userData) => {
    //   // console.log(userData.id);

    //   return {
    //     id: userData.id,
    //     firstName: userData.firstName,
    //     lastName: userData.lastName,
    //     maidenName: userData.maidenName,
    //     age: userData.age,
    //     gender: userData.gender,
    //     email: userData.email,
    //     phone: userData.phone,
    //     username: userData.username,
    //   };
    // });

    return data.users;
  }
}

// appointment/
router
  .route("/")
  
  .get(async (req, res) => {
    const findResult = await Appointment.find({});
    // const people = await popluDb();
    // console.log("this 1");
    // if (findResult == null || findResult.length <= 0) {
    //   // popluDb();
    //   console.log("this 2");
    //   const insertResult = await Appointment.insertMany(people);
    //   console.log("Inserted documents =>", insertResult);
    // }
    // console.log("this 3", findResult);

    res.render("book-appointment", { people: findResult });
  })

  .post((req, res) => {
    res.send("createn new ");
  });

// appountment/:id
router
  .route("/:id")

  .get((req, res) => {
    res.send(`'get an ID: ' ${req.params.id}`);
  })

  .patch((req, res) => {
    res.send(`update ID ${req.params.id}`);
  })

  .delete((req, res) => {
    res.send(`delete ID ${req.params.id}`);
  });

module.exports = router;
