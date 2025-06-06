const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const passwordValidator = (value) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(value);
};

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: passwordValidator,
            message: "Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character."
        }
    },
    city: {
        type: String
    },
    age: {
        type: Number
    }
});

UserSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const userModel = mongoose.model("user", UserSchema);
module.exports = userModel;
