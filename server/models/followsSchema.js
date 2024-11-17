import mongoose from 'mongoose';

const followsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    communityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community',
        required: true,
    },
    notifications: {
        type: Boolean,
        default: true, // Default to notifications on
    },
    followDate: {
        type: Date,
        default: Date.now, // Automatically set the date when the follow is created
    },

});

const Follows = mongoose.model('Follows', followsSchema);

export default Follows;
