const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        first: {
            type: String,
            required: true
        },
        last:  {
            type: String,
            required: true
        },
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    admin: Boolean,
    location: String
});


module.exports = mongoose.model("User", userSchema);