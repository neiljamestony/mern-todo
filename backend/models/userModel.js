const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'This field is required']
        },
        email:{
            type: String,
            required: [true, 'This field is required']
        },
        password:{
            type: String,
            required: [true, 'This field is required']
        },
    },
    {
        timestamps: true
})

module.exports = mongoose.model('User', userSchema)