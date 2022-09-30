const { model, Schema } = require("mongoose");

module.exports = model('token', new Schema({
    id: String,
    pushToken: String,
    chipotle: {
        type: Boolean,
        default: true
    },
    fooji: {
        type: Boolean,
        default: true
    },
    promo: {
        type: Boolean,
        default: true
    },
    deal: {
        type: Boolean,
        default: true
    }
}))