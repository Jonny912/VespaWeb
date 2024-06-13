const {Router} = require('express');
const auth = require('../middlewares/auth') ;
const ctrlWrapper = require('../helpers/ctrlWrapper')
// const getEvents = require('../controllers/eventsControlles/getEvents');
// const getEventById = require('../controllers/eventsControlles/getEventById');
const {getEvents, getEventById, addEvent, updateEventById, deleteEvent, getTotalEvents } = require('../controllers/eventsControlles');
const eventsRouter = Router();

eventsRouter.get('/total', ctrlWrapper(getTotalEvents))
eventsRouter.get('/', auth, ctrlWrapper(getEvents));
eventsRouter.get('/:id', ctrlWrapper(getEventById));
eventsRouter.post('/', auth, ctrlWrapper(addEvent));
eventsRouter.put('/:id', ctrlWrapper(updateEventById));
eventsRouter.delete('/:id', ctrlWrapper(deleteEvent));

module.exports = eventsRouter;