const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(__dirname)); // serve index.html and CSS automatically

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/usersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  mobile: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// API endpoint to save form data
app.post('/save-user', async (req, res) => {
  const { email, mobile } = req.body;
  if (!email || !mobile) return res.status(400).json({ message: 'Email and Mobile are required!' });

  try {
    const newUser = new User({ email, mobile });
    await newUser.save();
    res.json({ message: 'Data saved successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving data' });
  }
});

// Serve index.html on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(3000, () => console.log('Server running at http://localhost:3000'));
