import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';
const app = express();

app.use("/api/user", router);

mongoose.connect("mongodb+srv://Sujal:3YxrWeUadZK6oWO3@cluster0.jhtv6.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0")
.then(() => app.listen(5000))
.then(() => console.log('connected to db'))
.catch((err) => console.log("could not connect to the database", err));


// app.listen(5000); 


//3YxrWeUadZK6oWO3