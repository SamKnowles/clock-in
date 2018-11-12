const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true
    // },
    inputs: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
    },
    // username: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     lowercase: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // },
    // admin: Boolean,
    // location: String
});

// userSchema.methods.withoutPassword = function () {
//     let user = this.toObject();
//     delete user.password;
//     return user;
// }


module.exports = mongoose.model('user', userSchema);