const  mysql = require('mysql2') 
const dotenv = require('dotenv')
//  import {config} from 'dotenv'


dotenv.config()

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

    export {pool}

// pool.connect((err) => {
//     if (err) {
//       console.error("Database connection failed: " + err.stack);
//       return;
//     }
//     console.log("Connected to MySQL database.");
//   });
  
  module.exports = pool;

  