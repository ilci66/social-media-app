import PostMessage from '../models/postMessage.js';

// database calls take time don't forget to make them async
export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find()
    res.status(200).json(postMessage)
  
  } catch (error) {
    res.status(400).json({ error: error.message})
  }
}

export const createPosts = async (req, res) => {
    // this way for example post.title = req.body.title, just slighly easier to write
    const post = req.body
    //adding new on creation is important 
    const newPost = new PostMessage(post)
    try {
      await newPost.save()

      //201 is for successful creation
      res.status(201).json(newPost)
    } catch (error) {
      res.status(409).json({ error: error.message });
    }
}