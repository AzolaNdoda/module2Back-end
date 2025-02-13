const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const employeesRouter = require('./routes/employeesRouter.js');
const departmentRouter = require('./routes/departmentRouter.js');
const attendanceRouter = require('./routes/attendanceRouter.js');
const leaveReasonRouter = require('./routes/leaveReasonRouter.js');
const leaveRequestRouter = require('./routes/leaveRequestRouter.js');
const payrollRouter = require('./routes/payrollRouter.js');
const authRouter = require('./routes/authRouter.js'); // New Auth Router
const { authenticateJWT } = require('./middleware/authMiddleware.js'); // JWT Middleware

require('dotenv').config();

// Rate Limiting - Prevents brute-force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

const app = express(); 

// Middleware
app.use(cors());
app.use(express.json());
app.use(limiter); // Apply rate limiter

// 🚀 Routes
app.use('/auth', authRouter); // Handles Login/Auth

// ✅ Secure API Routes (Require Authentication)
app.use('/employees', authenticateJWT, employeesRouter);
app.use('/department', authenticateJWT, departmentRouter);
app.use('/attendance', authenticateJWT, attendanceRouter);
app.use('/leave_reason_lookup', authenticateJWT, leaveReasonRouter);
app.use('/leaverequest', authenticateJWT, leaveRequestRouter);
app.use('/payroll', authenticateJWT, payrollRouter);

// ❌ Global Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`));
