const {Router} = require('express');
const {userRegister, userLogin,userLogout} = require('../controllers/authControllers');
const ctrlWrapper = require('../helpers/ctrlWrapper');
const {JoiRegisterSchema} = require('../models/User');
const validateBody = require('../helpers/validateBody');
const auth = require('../middlewares/auth');

const authRouter = Router();

authRouter.post('/register',validateBody(JoiRegisterSchema), ctrlWrapper(userRegister));
authRouter.post('/login',ctrlWrapper(userLogin));
authRouter.post('/logout',auth, ctrlWrapper(userLogout));

module.exports = authRouter;
