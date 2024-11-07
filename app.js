import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => app.listen(5000))
  .then(() => console.log('Connected to DB at port 5000'))
  .catch((err) => console.log("Could not connect to the database", err));
