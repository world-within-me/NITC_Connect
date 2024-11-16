import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Community name is mandatory
        unique: true,   // No two communities can have the same name
        trim: true,     // Removes leading/trailing whitespace
        minlength: 3,   // Ensures name is at least 3 characters long
    },
    description: {
        type: String,
        required: true, // Description is mandatory
        trim: true,
        maxlength: 500, // Maximum description length for concise details
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId, // Refers to a User document
        ref: 'User',                          // Links this field to the `User` model
        required: true,                       // Every community must have a creator
    }
}, {
    timestamps: true // Automatically adds `createdAt` and `updatedAt` timestamps
});

// Create and export the Community model
const Community = mongoose.model('Community', communitySchema);
export default Community;
