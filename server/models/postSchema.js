import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            trim: true,
            maxlength: [200, 'Title cannot exceed 200 characters']
        },
        content: {
            type: String,
            required: [true, 'Content is required']
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Author is required']
        },
        community: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Community',
            required: [true, 'Community is required']
        },
        media: {
            type: [String], // Array of URLs for media files
            default: []
        },
        reactions: {
            likes: { type: Number, default: 0 },
            dislikes: { type: Number, default: 0 },
        },
        comments: [
            {
                user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
                text: { type: String, required: true },
                createdAt: { type: Date, default: Date.now }
            }
        ]
    },
    {
        timestamps: true // Automatically adds createdAt and updatedAt fields
    }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
