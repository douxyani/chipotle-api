const { model, Schema } = require("mongoose");

module.exports = model('token', new Schema({
    id: String,
    pushToken: String,
    chipotle: {
        type: Boolean,
        default: Boolean(true)
    },
    fooji: {
        type: Boolean,
        default: Boolean(true)
    },
    promo: {
        type: Boolean,
        default: Boolean(true)
    },
    deal: {
        type: Boolean,
        default: Boolean(true)
    }
}))