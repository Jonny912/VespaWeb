const { required, string } = require('joi');
const {Schema, model} = require('mongoose');
const Joi = require('joi');

const eventSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Event name is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    type: {
        type: String,
        required: [true, 'Event type is required']
    },
    date: {
        type: Object,
        required: [true, 'Event date is required']
    },
    time: {
        type: Object,
        required: [true, 'Event time is requires']
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, {versionKey: false, timestamps: true});

const eventJoiSchema = Joi.object({
   name: Joi.string().required(),
   description: Joi.string().required(),
   type: Joi.string().required(),
   date: Joi.object().required(),
   time: Joi.object().required()
})

const Event = model('event', eventSchema);

module.exports = {
    Event,
    eventJoiSchema
}