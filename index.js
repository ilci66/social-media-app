import express from 'express';
// it's the same as this, in new node versions 
// const express = require('express')
// don't forget to add module to the package.json
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//not including js at the end crashed it, so 
//don't forget in node you need to unlike react
import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({  limit:"30mb", extended:true }));
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true }));
app.use(cors());

//now it'll get posts in front in the urlas 'localhost:5000/posts/something'( / in mine)
app.use('/posts', postRoutes)

const port = process.env.port || 5000; 
console.log(process.env.URI)
// use this for now 
const uri = "mongodb+srv://ilker:123asd123@learningmongodb.duuyu.mongodb.net/database6?retryWrites=true&w=majority"
// this returns a promise actually so you can chain a then and a catch
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(() => app.listen(port, () => console.log(`Server running on port ${port}`)))
  .catch((error) => console.log(error.message))

// to fix the error I got in the console, had to do the same in previous projects
mongoose.set('useFindAndModify', false)