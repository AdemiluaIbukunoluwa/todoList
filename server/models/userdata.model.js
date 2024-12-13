const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"],
    },
    email: {
        type: String,
        required: [true, "Please enter email"]
    },
    password: {
        type: String,
        required: true
    },
},     {
    timestamps: true
});

const User = mongoose.model("User", UserDataSchema);
module.exports = User ;