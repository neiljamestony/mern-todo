const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: [true, 'This field is required']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Todo', todoSchema)