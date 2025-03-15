const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    githubAccount: { type: String },
    phoneNumber: { type: Number },
    roles: { type: [String], default: ["user"] }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
