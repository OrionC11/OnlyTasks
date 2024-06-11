const { Schema, model } = require("mongoose")

const taskSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    deadline: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
    },
    isComplete: {
        type: Boolean,
        default: false,
    },
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    }
})

const Task = model('Task', taskSchema);
module.exports = Task;