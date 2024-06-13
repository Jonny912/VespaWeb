const {Event} = require('../../models/Event');

const updateEventById = async (req, res) => {
const {id} = req.params;
const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {new: true});
res.status(200).json({
    status: 'Success',
    code: 200,
    data: updatedEvent
})
};

module.exports = updateEventById;