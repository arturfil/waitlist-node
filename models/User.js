const {model, Schema} = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trime: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trime: true
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }
});

UserSchema.methods.toJSON = function () {
    const {password, __v, ...user} = this.toObject();
    return user;
}

module.exports = model("User", UserSchema);