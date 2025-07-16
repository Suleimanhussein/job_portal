// import express from "express";
// import { config } from "dotenv";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import fileUpload from "express-fileupload";

// import dbConnection from "./database/dbConnection.js";
// import jobRouter from "./routes/jobRoutes.js";
// import userRouter from "./routes/userRoutes.js";
// import applicationRouter from "./routes/applicationRoutes.js";
// import { errorMiddleware } from "./middlewares/error.js";

// // Load environment variables
// config({ path: "./config/config.env" });

// const app = express();

// // ✅ Configure CORS properly
// const allowedOrigins = [process.env.FRONTEND_URL];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// // ✅ Handle preflight requests
// app.options("*", cors());

// // ✅ Middlewares
// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );

// // ✅ Routes
// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/job", jobRouter);
// app.use("/api/v1/application", applicationRouter);

// // ✅ Connect to database
// dbConnection();

// // ✅ Error handler
// app.use(errorMiddleware);

// export default app;
