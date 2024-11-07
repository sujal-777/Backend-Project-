import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';

const app = express();
app.use(express.json())

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect("mongodb+srv://admin:D8qXuVH2d23u2tp5@cluster0.d3vxsje.mongodb.net/Blog-App?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => app.listen(5000))
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log("Could not connect to the database", err));
