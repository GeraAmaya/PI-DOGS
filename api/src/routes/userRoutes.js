const express = require('express');
const { createUserTable, getUserByUsername, authenticateUser } = require('../models/userModel');
const router = express.Router();

// ...

router.post('/login', async (req, res) => {
  try {
    await createUserTable();

    const { username, password } = req.body;
    const user = await authenticateUser(username, password);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Aquí puedes generar un token JWT y enviarlo al frontend
    // Ejemplo:
    // const token = generateToken(user.id);
    // res.json({ token });
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
