const {Event} =require('../../models/Event');

const addEvent = async(req, res) => {
const {_id} = req.user; 
console.log(_id)
const newEvent = await Event.create({...req.body, owner: _id});
res.status(201).json({
    status: 'Success',
    code: 201,
    data: newEvent
})
};

module.exports = addEvent;