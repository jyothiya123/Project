const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userrouters');  // Path to the user route

const app = express();

// Middleware
app.use(express.json());  // To parse JSON bodies
app.use(cors());  // Enable CORS

// Use the user route
app.use('/api/auth', userRouter);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/foodreciepe', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
