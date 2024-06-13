const {Event} = require('./../../models/Event');

const getTotalEvents = async (req, res) => {
    const {page = 1, limit = 10} = req.query;
    const skip = (page - 1) * limit;
    const events = await Event.find()
    console.log(events)
    res.status(200).json({
      status: "Success",
      code: 200,
      data: events
    })
}

module.exports = getTotalEvents;