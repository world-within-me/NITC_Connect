import Follows from '../models/followsSchema.js';
import Community from '../models/communitySchema.js';


export const joinCommunity = async (req, res) => {
    const { communityId } = req.params;
    const userId = req.user.id; // Extracted from authMiddleware

    try {
        // Check if the community exists
        const community = await Community.findById(communityId);
        if (!community) {
            return res.status(404).json({ error: 'Community not found' });
        }

        // Check if the user already follows the community
        const existingFollow = await Follows.findOne({ userId, communityId });
        if (existingFollow) {
            return res.status(400).json({ error: 'You are already following this community' });
        }

        // Add a follow record
        const follow = new Follows({ userId, communityId });
        await follow.save();

        res.status(200).json({ message: 'Successfully joined the community', follow });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};


export const leaveCommunity = async (req, res) => {
    const { communityId } = req.params;
    const userId = req.user.id; // Extracted from authMiddleware

    try {
        // Find and delete the follow record
        const follow = await Follows.findOneAndDelete({ userId, communityId });
        if (!follow) {
            return res.status(400).json({ error: 'You are not following this community' });
        }

        res.status(200).json({ message: 'Successfully left the community' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};


export const getFollowedCommunities = async (req, res) => {
    const userId = req.user.id; // Extracted from authMiddleware

    try {
        // Find all follow records for the user
        const follows = await Follows.find({ userId }).populate('communityId', 'name description');
        if (follows.length === 0) {
            return res.status(404).json({ message: 'You are not following any communities' });
        }

        res.status(200).json({ communities: follows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
