const Task = require("../models/Task");

// Create
exports.createTask = async (req, res) => {
  try {
    const { title, dueAt } = req.body;

    const task = await Task.create({
      user: req.user.id,
      title,
      dueAt: dueAt ? new Date(dueAt) : undefined,
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Failed to create task" });
  }
};

// Read
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};

// Update
exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(task);
};

// Delete
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
