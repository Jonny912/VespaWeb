const {Router} = require('express');
const auth = require('../middlewares/auth');
const getCurrentUser = require('../controllers/usersControllers/getCurrentUser');
const ctrlWrapper = require('../helpers/ctrlWrapper');
const verifyEmail = require('../controllers/usersControllers/verifyEmail');

const usersRouter = Router();

usersRouter.get('/current', auth, getCurrentUser);
usersRouter.get('/verify/:verificationToken', ctrlWrapper(verifyEmail));

module.exports = usersRouter;