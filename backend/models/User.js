const {model, Schema} = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username:
    {
        type: String,
        required: [true, 'Enter your name please'],
        minlength: [2, 'Name should be at least 4 characters']
    },
    email: {
        type: String,
        required: [true, 'Enter an email please'],
    },
    password: {
        type: String,
        required: [true, 'Enter a password please'],
        minlength: [6, 'Password should be at least 6 characters'],
    },
    token: {
        type: String,
        default: null
    },
    verify: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String,
        required: [true, 'Verify token is required']
    }
},
{versionKey: false, timestamps: true}
)

userSchema.methods.setPassword = function(password){
   this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
};

userSchema.methods.checkPassword = function(password) {
    return bcrypt.compareSync(password, this.password)}

const JoiRegisterSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required()
})

const User = model('user', userSchema);

module.exports = {
    User,
    JoiRegisterSchema};