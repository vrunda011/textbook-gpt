// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Sign Up Route
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  db.run(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`, [username, email, password], function(err) {
    if (err) {
      return res.status(400).send({ message: 'User already exists or error occurred.' });
    }
    res.status(201).send({ id: this.lastID });
  });
});

// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.get(`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password], (err, row) => {
    if (err || !row) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }
    res.send({ message: 'Login successful', user: row });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});