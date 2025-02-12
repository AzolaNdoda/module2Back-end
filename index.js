// import express from 'express';
// import cors from 'cors';
// import helmet from 'helmet';
// import morgan from 'morgan';
// import rateLimit from 'express-rate-limit';
// import employeesRouter from './routes/employeesRouter.js';
// import departmentRouter from './routes/departmentRouter.js';
// import attendanceRouter from './routes/attendanceRouter.js';
// import leaveReasonRouter from './routes/leaveReasonRouter.js';
// import leaveRequestRouter from './routes/leaveRequestRouter.js';
// import payrollRouter from './routes/payrollRouter.js';
// import authRouter from './routes/authRouter.js'; // New Auth Router
// import { authenticateJWT } from './middleware/authMiddleware.js'; // JWT Middleware
// import dotenv from 'dotenv';
// dotenv.config();

// const PORT = process.env.PORT || 3000;
// const app = express();

// // 🛑 Rate Limiting - Prevents brute-force attacks
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // Limit each IP to 100 requests per windowMs
//   message: 'Too many requests from this IP, please try again later.',
// });

// app.use(cors());
// app.use(express.json());
// app.use(helmet());
// app.use(morgan('combined'));
// app.use(limiter); // Apply rate limiter


// // 🚀 Routes
// app.use('/auth', authRouter); // Handles Login/Auth

// // ✅ Secure API Routes (Require Authentication)
// app.use('/employees', authenticateJWT, employeesRouter);
// app.use('/department', authenticateJWT, departmentRouter);
// app.use('/attendance', authenticateJWT, attendanceRouter);
// app.use('/leave_reason_lookup', authenticateJWT, leaveReasonRouter);
// app.use('/leaverequest', authenticateJWT, leaveRequestRouter);
// app.use('/payroll', authenticateJWT, payrollRouter);

// // ❌ Global Error Handling
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal Server Error' });
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running at: http://localhost:${PORT}`);
// });


const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRouter.js");
require("dotenv").config();

const app = express(); 

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));










