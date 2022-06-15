// Require mongoose
const mongoose = require('mongoose')
const { stringify } = require('querystring')

// create schema
const schema = mongoose.Schema

const contactSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: Number
})

// export
module.exports = Contact = mongoose.model('contact', contactSchema)