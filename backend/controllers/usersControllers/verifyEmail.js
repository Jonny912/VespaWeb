const{User} = require('../../models/User');
const HTTPError = require('../../helpers/HTTPError');

const verifyEmail = async (req, res) => {
const {verificationToken} = req.params;
const user = await User.findOne({verificationToken});
if(!user){
    throw HTTPError(404, 'Not found')
}

await User.findByIdAndUpdate(user._id, {verify: true, verificationToken: null});

res.status(200).send(
   ` <div style="flex-direction: column; gap: 24px; width: 100vw; height: 100vh; display: flex;  justify-content: center; align-items: center;">
   <p style="font-size: 28px; text-align: center;">Your email has been successfully verified!</p>
   <a style="font-size: 20px; color: black; text-decoration: underline;" href="http://localhost:3000/login">Press here to log in</a>
   </div>`
)
}

module.exports = verifyEmail;