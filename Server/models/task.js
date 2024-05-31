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
        type: Date,
        required: true,
    },
    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
    },
    status: {
        type: String,
        enum: ["Not Complete", "Completed", "In Progress"],
    }
})

const Task = model('Task', taskSchema);
module.exports = Task;