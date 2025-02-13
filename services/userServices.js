import { pool } from '../database/connection.js'; // Assuming you have a DB connection setup

export const getUserByUsername = async (username) => {
  const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0]; // Assuming users table has username and password columns
};
