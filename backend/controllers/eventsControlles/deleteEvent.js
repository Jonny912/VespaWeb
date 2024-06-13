const {Event} = require('../../models/Event');

const deleteEvent = async (req, res) => {
const {id} = req.params;
const deletedEvent = await Event.findByIdAndDelete(id);
res.json({
   status: 'Success',
   code: 204,
   data: deletedEvent 
})
};

module.exports = deleteEvent;