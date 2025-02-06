import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

let tasks = [
    { id: 1, title: 'Перше завдання', completed: false },
    { id: 2, title: 'Друге завдання', completed: true }
];

app.get('/', (req, res) => {
  res.send('Сервер працює! 🚀');
});

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const newTask = { id: tasks.length + 1, ...req.body };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.listen(PORT, () => console.log(`✅ Бекенд запущено на http://localhost:${PORT}`));