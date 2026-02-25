import express from 'express';
import dbConnect from './config/db.js';
import userRouter from './routers/userRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRouter);

const startServer = async () => {
    try {
        await dbConnect();
        app.listen(8080, () => {
            console.log("Server started on port 8080");
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
};

startServer();

// Database schema:
// student: name, email, course, age, createdAt

// Api routes 
// for curd opreration 