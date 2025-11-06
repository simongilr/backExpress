const { Task } = require('../database/models');

let tasks = [];
let currentId = 1;

exports.getTask = async (req, res) => {
    const tasks = await Task.findAll();
    res.json(tasks);
}

exports.createTask = async(req, res) => {
    const { title } = req.body;
    const newTask = Task.create({title: title, completed: false});
    res.json(newTask);
}

exports.updateTask = async(req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    //const task = tasks.find(t => t.id == id);
    const task = await Task.findByPk(id);

    task.title = title;
    task.completed = completed ? completed : false;
    await task.save();
    res.json(tasks);
}


exports.deleteTask = async(req, res) => {
    const { id } = req.params;
    //const index = tasks.findIndex(t => t.id == id);
    const task = await Task.findByPk(id);

    //tasks.splice(index, 1);
    await task.destroy();
    res.json(tasks);
}