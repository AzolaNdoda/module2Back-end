// import bcrypt from 'bcrypt'
// let pwd = '12345678Matthewbrown'

// // callback function method


// bcrypt.hash(pwd, 10, (err, hashedPassword) => {
//     console.log(pwd)
//     if (err) {
//         throw err
//     }
//     console.log(hashedPassword) 
// })
// export default bcrypt

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/config.js");

const router = express.Router();
const secretKey = "your_secret_key"; // Change this to a secure secret!

// Login API Route
router.post("/login", (req, res) => {   
  const { user_id, username, email, password } = req.body;
// console.log(user_id, username, email, password);

  db.query(
    "SELECT * FROM users WHERE user_id = ? AND name = ? AND email = ? AND password = ?", 
    [user_id, username, email, password],
    async (err, results) => {
      if (err) return res.status(500).json({ message: "Database Error." });

      if (results.length === 0) {
        return res.status(401).json({ message: "Unknown username or email or password." });
      }

    //   const user = results[0];

      // Compare hashed password //hash 
    //   const passwordMatch = await bcrypt.compare(password, user.password);
    //   if (!passwordMatch) {
    //     return res.status(401).json({ message: "Incorrect password." });
    //   }
      else{
        return res.status(200).json({ message: "Successfully logged in." });
      }

      // Generate JWT Token
      const token = jwt.sign(
        { userId: user.user_id, username: user.name, email: user.email, password: user.password },
        secretKey,
        { expiresIn: "1h" }
      );

      res.json({ message: "Login successful!", token });
    }
  );
});

module.exports = router;
