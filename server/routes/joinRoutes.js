import express from 'express';
import {
    joinCommunity,
    leaveCommunity,
    getFollowedCommunities,
} from '../controllers/joiningController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const joinRouter = express.Router();

joinRouter.post('/:communityId/join', authMiddleware, joinCommunity);


joinRouter.delete('/:communityId/leave', authMiddleware, leaveCommunity);


joinRouter.get('/', authMiddleware, getFollowedCommunities);

export default joinRouter;
