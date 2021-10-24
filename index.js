const express = require('express');
const bodyParser = require('body-parser');
const { URLSearchParams } = require('url');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hellp World, from express');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

let todos = [];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/todo', (req, res) => {
    const todo = req.body;

    console.log(todo);
    todos.push(todo);

    res.send('todo is added to the database');
});

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.get('/todo/:isbn', (req, res) => {
    const isbn = req.params.isbn;

    for (let todo of todos) {
        if (todo.isbn === isbn) {
            res.json(todo);
            return;
        }
    }

    res.status(404).send('Todo not found');
});

app.delete('/todo/:isbn', (req, res) => {
    const isbn = req.params.isbn;

    todos = todos.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }
        return false;
    });

    res.send('Todo is deleted');
});

app.post('/todo/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const newTodo = req.body;

    for (let i = 0; i < todos.length; i++) {
        let todo = todos[i]
        if (todo.isbn === isbn) {
            todos[i] = newTodo;
        }
    }

    res.send('Todo is edited');
});