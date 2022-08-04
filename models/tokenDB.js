const { model, Schema } = require("mongoose");

module.exports = model('token', new Schema({
    id: String,
    pushToken: String
}))