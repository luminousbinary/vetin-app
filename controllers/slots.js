const { Appointment, Slot } = Model;
const slotController = {
  async all(req, res) {
    // Returns all Slots

    try {
      await Slot.find({});
      res.json(slots);
    } catch (error) {
      console.log(error);
      res.send(`error : ${error}`);
    }
    // .exec((err, slots) => );
  },
};
module.exports = slotController;
