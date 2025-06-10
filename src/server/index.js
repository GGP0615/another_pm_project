require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../public')));

// Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/feedback', require('./routes/feedback'));
app.use('/api/competitors', require('./routes/competitors'));
app.use('/api/roadmap', require('./routes/roadmap'));

app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`);
});