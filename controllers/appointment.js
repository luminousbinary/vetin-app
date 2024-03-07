const express = require("express");
const router = express.Router();
const Appointment = require("../models/module");
const Slot = require("../models/slot");
const Vendor = require("../models/vendor");
const User = require("../models/user");

// async function popluDb() {
//   const res = await fetch("https://dummyjson.com/users");
//   const data = await res.json();

//   if (data) {
//     // //  console.log(data);
//     // const appointment = data.users.forEach((userData) => {
//     //   // console.log(userData.id);

//     //   return {
//     //     id: userData.id,
//     //     firstName: userData.firstName,
//     //     lastName: userData.lastName,
//     //     maidenName: userData.maidenName,
//     //     age: userData.age,
//     //     gender: userData.gender,
//     //     email: userData.email,
//     //     phone: userData.phone,
//     //     username: userData.username,
//     //   };
//     // });

//     return data.users;
//   }
// }

// appointment/
// router
//   .route("/")

//   .get(async (req, res) => {
//     try {
//       const findResult = await Appointment.find({});
//       res.render("book-appointment", { people: findResult });
//     } catch (error) {
//       console.log(error);
//       res.send(`Error: ${error}`);
//     }
//   })

//   .post(async (req, res) => {
//     try {
//       const reqBody = req.body;

//       const newSlot = new Slot({
//         slot_time: reqBody.slot_time,
//         slot_date: reqBody.slot_date,
//         created_at: Date.now(),
//       });

//       newSlot.save();
//       const newAppointment = new Appointment({
//         name: reqBody.name,
//         email: reqBody.email,
//         phone: reqBody.phone,
//         slots: newSlot._id,
//         created_at: Date.now(),
//       });

//       // const nexmo = new Nexmo({
//       //   apiKey: "YOUR_API_KEY",
//       //   apiSecret: "YOUR_API_SECRET",
//       // });
//       let msg =
//         reqBody.name +
//         " " +
//         "this message is to confirm your appointment at" +
//         " " +
//         reqBody.appointment;
//       // and saves the record to
//       // the data base

//       newAppointment.save();

//       console.log(" this is the data that is to be saved: ", newAppointment);

//       const savedData = await Appointment.find({ _id: newAppointment.id });

//       if (savedData !== null) {
//         return await savedData.json();
//       }

//       console.log("then send message ::: ", msg);

//       // as((err, saved) => {
//       //   // Returns the saved appointment
//       //   // after a successful save
//       //   console.log(
//       //     "Returns the saved appointment after a successful save... "
//       //   );
//       //   Appointment.find({ _id: saved._id })
//       //     .populate("slots")
//       //     .exec((err, appointment) => res.json(appointment));
//       //   // const from = VIRTUAL_NUMBER;
//       //   // const to = RECIPIENT_NUMBER;

//       //   console.log("then send message ::: ", msg);
//       //   // nexmo.message.sendSms(from, to, msg, (err, responseData) => {
//       //   //   if (err) {
//       //   //     console.log(err);
//       //   //   } else {
//       //   //     console.dir(responseData);
//       //   //   }
//       //   // });
//       // });
//     } catch (error) {
//       console.log(error);
//       res.send(`Error : ${error}`);
//     }

//     res.send("createn new ");
//   });

const appointmentController = {
  async all(req, res) {
    try {
      const findResult = await Appointment.find({});
      console.log(findResult);
      res.json( findResult );
    } catch (error) {
      console.log(error);
      res.send(`Error: ${error}`);
    }
  },

  async create(req, res, next) {
    try {
      const reqBody = req.body;
      console.log(" okay 1".reqBody);
      const newSlot = new Slot({
        slot_time: reqBody.slot_time,
        slot_date: reqBody.slot_date,
        created_at: Date.now(),
      });
      console.log(" created slot");
      newSlot.save();
      const newAppointment = new Appointment({
        name: reqBody.name,
        email: reqBody.email,
        phone: reqBody.phone,
        slots: newSlot._id,
        created_at: Date.now(),
      });
      console.log(" created appoint");

      // // replace with mail chimp email sender
      // const nexmo = new Nexmo({
      //   apiKey: "YOUR_API_KEY",
      //   apiSecret: "YOUR_API_SECRET",
      // });

      let msg =
        reqBody.name +
        " " +
        "this message is to confirm your appointment at" +
        " " +
        reqBody.appointment;
      // and saves the record to
      // the data base
      console.log(" ready to save appoint");

      newAppointment.save();

      console.log(" saved appoint");

      console.log(" this is the data that is to be saved: ", newAppointment);

      const savedData = await Appointment.find({
        _id: newAppointment._id,
      })
        .populate("slots")
        .exec();

      if (savedData !== null) {
        console.log(" final phase :::", savedData);

        await res.json(savedData)
        // return savedData;
      }

      console.log("then send message ::: ", msg);
      
    } catch (error) {
      console.log(error);
      res.send(`Error : ${error}`);
    }

  },
};

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

module.exports = appointmentController;
// module.exports = router;
