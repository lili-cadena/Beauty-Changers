const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema ({
    fullName: {
        type:String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    creditCard: {
        type: Number,
        required: true,
    },
    cvv: {
        type: Number,
        required: true,
    },
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})

module.exports = mongoose.model('Address', addressSchema);