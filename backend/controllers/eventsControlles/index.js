const getEvents = require('./getEvents');
const getEventById = require('./getEventById');
const addEvent = require('./addEvent');
const updateEventById = require('./updateEventById');
const deleteEvent = require('./deleteEvent');
const getTotalEvents = require('./getTotalEvents');

module.exports = {
    getEvents,
    getEventById,
    addEvent, 
    updateEventById,
    deleteEvent,
    getTotalEvents
}