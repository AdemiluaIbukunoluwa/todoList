const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: [true, "Please enter a name"],
    },
    taskNotes: {
        type: String,
    },
    taskStatus: {
        type: String,
        enum: ['todo', 'in-progress', 'done'], // Define possible statuses
        default: "todo"
    }
}
)

const CategorySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    catName: {
        type: String,
        required: [true, "Please enter a name"],
    },
    colortheme: {
        type: String,
        default: "#ffff"
    },
    icon: {
        type: String,
    }, 
    tasks: {
        type: [TasksSchema],
    }
})

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;