import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from 'path';

dotenv.config();

//connect to db
connectDB();
const app = express();

//path of current file
const _dirname = path.resolve();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


// List of allowed origins
const allowedOrigins = ['https://job-portal-kzws.onrender.com/', 'http://localhost:5173/', 'http://localhost:8000/'];

// Custom CORS middleware
const corsOptions = (req, callback) => {
  const origin = req.header('Origin');
  if (allowedOrigins.includes(origin)) {
    callback(null, { origin: true }); // Allow this origin
  } else {
    callback(null, { origin: false }); // Deny this origin
  }
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;


// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

//serving the frontend file
app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (_, res)=>{
    res.sendFile(path.resolve(_dirname,"frontend", "dist", "index.html"));
})

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})