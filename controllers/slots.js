const  Slot  = require('../models/slot');
const slotController = {
  async all(req, res) {
    // Returns all Slots

    try {
      const slots = await Slot.find({});
      res.json(slots);
    } catch (error) {
      console.log(error);
      res.send(`error : ${error}`);
    }
  },
};
module.exports = slotController;
