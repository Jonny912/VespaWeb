const {Event} = require('../../models/Event');

const getEvents = async (req, res) => {
    const {_id} = req.user;
    const {page = 1, limit = 10} = req.query;
    const skip = (page - 1) * limit; 
const events = await Event.find({owner: _id}, "", {skip, limit: Number(limit)}).populate('owner', '_id username email' );
res.status(200).json({
    status: 'Success',
    code: 200,
    data: events

})
}

module.exports = getEvents;