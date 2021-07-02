import express from 'express';
import { getPosts, createPosts } from '../controllers/posts.js'
const router = express.Router();

// gonna handle the logic for the routes in /controllers/posts.js, otherwise it will look confusing here
router.get('/', getPosts)
router.post('/', createPosts)


export default router;