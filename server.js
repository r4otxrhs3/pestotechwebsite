const express = require('express');
const cors = require('cors');
const tasks = require('./routes/tasks');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/tasks', tasks);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
