const {Event} = require('../../models/Event');

const getEventById = async (req, res) => {
const {id} = req.params;

const event = await Event.findOne({_id: id});
res.status(200).json({
    status: 'Success',
    code: 200,
    data: event
})
};

module.exports = getEventById;