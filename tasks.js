const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let tasks = [];

// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Get single task
router.get('/:id', (req, res) => {
  const found = tasks.some((task) => task.id === req.params.id);
  if (found) {
    res.json(tasks.filter((task) => task.id === req.params.id));
  } else {
    res.status(400).json({ msg: `No task with id ${req.params.id}` });
  }
});

// Create task
router.post('/', (req, res) => {
  const newTask = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  };
  if (!newTask.title) {
    return res.status(400).json({ msg: 'Please include a title' });
  }
  tasks.push(newTask);
  res.json(newTask);
});

// Update task status
router.put('/:id', (req, res) => {
  const found = tasks.some((task) => task.id === req.params.id);
  if (found) {
    const updatedTask = req.body;
    tasks = tasks.map((task) =>
      task.id === req.params.id ? { ...task, status: updatedTask.status } : task
    );
    res.json(updatedTask);
  } else {
    res.status(400).json({ msg: `No task with id ${req.params.id}` });
  }
});

// Delete task
router.delete('/:id', (req, res) => {
  const found = tasks.some((task) => task.id === req.params.id);
  if (found) {
    tasks = tasks.filter((task) => task.id !== req.params.id);
    res.json({ msg: 'Task deleted', tasks });
  } else {
    res.status(400).json({ msg: `No task with id ${req.params.id}` });
  }
});

module.exports = router;
