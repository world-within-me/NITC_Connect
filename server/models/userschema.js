import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensures no duplicate usernames
        trim: true,   // Removes leading and trailing whitespace
    },
    displayname: {
        type: String,
        required: true,
        trim: true,   // Ensures a clean display name
    },
    dob: {
        type: Date,
        required: true, // Ensures every user has a date of birth
    },
    mail: {
        type: String,
        required: true,
        unique: true,  // Ensures no duplicate email addresses
        trim: true,
        lowercase: true, // Automatically converts email to lowercase
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'], // Email validation regex
    },
    password: {
        type: String,
        required: true, // Ensures a password is provided
        minlength: 8,   // Enforces a minimum length for security
    }
}, {
    timestamps: true // Adds `createdAt` and `updatedAt` fields automatically
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
export default User;
