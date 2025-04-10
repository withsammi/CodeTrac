const express = require('express');
const supabase = require('../supabase.js');

const router = express.Router();

// Test route to check if the backend is working
router.get('/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Register
router.post('/register', async (req, res) => {
  const { email, password, username } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username },
    },
  });

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ user: data.user });
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return res.status(401).json({ error: error.message });
  res.status(200).json({ token: data.session.access_token });
});

module.exports = router;
