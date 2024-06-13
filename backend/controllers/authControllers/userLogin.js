const {User} = require('../../models/User');
const HTTPError = require('../../helpers/HTTPError');
const jwt = require('jsonwebtoken');

const {SECRET_KEY} = process.env;


const userLogin = async (req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne({email});

  if(!user || !user.verify || !user.checkPassword(password)){    
      throw HTTPError(401, 'Incorrect login or password');
  }


  const payload = user;

  const token = jwt.sign(payload.toObject(), SECRET_KEY, {expiresIn: '12h'});

  await User.findByIdAndUpdate(user._id,{token});

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
        token, 
        user
    }
  })

}

module.exports = userLogin;