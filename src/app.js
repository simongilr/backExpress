const express = require('express');
const app = express();
const port = 3000;
const tasksRoutes = require('./routes/tasksRoutes');

app.use(express.json());
app.use('/tasks', tasksRoutes);
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));