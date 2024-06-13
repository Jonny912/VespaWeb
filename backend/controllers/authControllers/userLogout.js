const {User} = require('../../models/User');

const userLogout = async (req, res) => {
const {_id} = req.user;
console.log(_id)
await User.findByIdAndUpdate(_id, {token: null});
res.status(204).json()
}

module.exports = userLogout;