const JWT = require('jsonwebtoken');
const {User} = require('../models/User');
const HTTPErrors = require('../helpers/HTTPError');

const {SECRET_KEY} = process.env;

const auth = async (req, res, next) => {
    try{
        const {authorization = ""} = req.headers;
const [bearer, token] = authorization.split(" ");
if(bearer !== "Bearer") {
    throw HTTPErrors(401, 'Unauthorized');

} 
try{
    const {_id} = JWT.verify(token, SECRET_KEY);
    const user = await User.findById(_id);
    if(!user || !user.token){
        throw HTTPErrors(401, 'Unauthorized');
 
    }
    req.user = user;
    next();
}
catch(error){
    throw HTTPErrors(401, 'Invalid signature')

}
}
catch(error){
    next(error)
}

}

module.exports = auth;