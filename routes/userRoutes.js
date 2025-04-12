const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

router.post('/', async (req, res) => {
  try {
    const users = await User.create(req.body);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create users' });
  }
});

module.exports = router; 
