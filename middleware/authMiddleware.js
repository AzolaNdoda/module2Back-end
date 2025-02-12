// import jwt from 'jsonwebtoken';

// const SECRET_KEY = 'your_secret_key_here';

// export const authenticateJWT = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) return res.status(403).json({ error: 'Access Denied' });

//   jwt.verify(token, SECRET_KEY, (err, user) => {
//     if (err) return res.status(403).json({ error: 'Invalid token' });
//     req.user = user;
//     next();
//   });
// };

// const jwt = require("jsonwebtoken");
// const pool = mysql.createPool
const jwt = mysql.jsonwebtoken;
const secretKey = "your_secret_key"; // Use .env file in production

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(403).json({ message: "Access denied." });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token." });

    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
