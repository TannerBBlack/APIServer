const express = require('express');
const bodyParser = require('body-parser');
const { URLSearchParams } = require('url');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let data = [{
    title: "Game",
    id: 5,
    complete: false,
    category: "Personal"
}];

let todoList = [
    {
      title: "Eat",
      id: 1,
      complete: false,
      category: "Personal"
    },
    {
      title: "Sleep",
      id: 2,
      complete: false,
      category: "Personal"
    },
    {
      title: "Code",
      id: 3,
      complete: false,
      category: "Work"
    },
  ];

  let categoriesList = [
    {
      category: "Active",
      id: 1,
      
    },
    {
      category: "Social",
      id: 2,
      
    },
    {
      category: "Work",
      id: 3,
      
    },
    {
      category: "Personal",
      id: 4
    }
  ];

app.get('/', (req, res) => {
    res.send('Hello World');
});

// todos stuff
app.get('/api/todos', (req, res) => {
    res.send(todoList);
});

app.get('/api/todos/:id', (req, res) => {
    const id = req.params.id
    for (let todo of todoList) {
        if (todo.id === id) {
            res.json(todo);
            return
        }
    }
    res.status(404).send('todo not found');
});

app.get('/api/todos-from/:category', (req, res) => {
    const category = req.params.category
    for (let category of todoList) {
        if (category.id === category) {
            res.json(category);
            return
        }
    }
    res.status(404).send('category not found')
});

app.delete('api/todos/delete/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.id;

    // Remove item from the todoList array
    todos = todoList.filter(i => {
        if (i.id !== id) {
            return true;
        }
        return false;
    });

    res.send('todo is deleted');
});

app.post('api/todos/post/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.id;
    const newTodo = req.body;

    // Remove item from the todoList array
    for (let i = 0; i < todoList.length; i++) {
        let todo = todoList[i]
        if (todo.id === id) {
            todoList[i] = newTodo;
        }
    }

    res.send('Todo is edited');
});

app.put('api/todos/put/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.id;
    const newTodo = req.body;

    // Remove item from the todoList array
    for (let i = 0; i < todoList.length; i++) {
        let todo = todoList[i]
        if (todo.id === id) {
            todoList[i] = newTodo;
        }
    }

    res.send('Todo is edited');
});

// categories stuff
app.get('/api/categories', (req, res) => {
    res.send(categoriesList);
});

app.delete('api/category/delete/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.id;

    // Remove item from the todoList array
    categories = categoriesList.filter(i => {
        if (i.id !== id) {
            return true;
        }
        return false;
    });

    res.send('category is deleted');
});

app.post('api/category/post/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.id;
    const newCategory = req.body;

    // Remove item from the todoList array
    for (let i = 0; i < categoriesList.length; i++) {
        let category = categoriesList[i]
        if (category.id === id) {
            categoriesList[i] = newCategory;
        }
    }

    res.send('category is edited');
});

app.put('api/category/put/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.id;
    const newCategory = req.body;

    // Remove item from the todoList array
    for (let i = 0; i < categoriesList.length; i++) {
        let category = categoriesList[i]
        if (category.id === id) {
            categoriesList[i] = newCategory;
        }
    }

    res.send('category is edited');
});

// PORT
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// - Minimum HTTP endpoints
//  - GET TODOS
//  - POST TODO
//  - PUT TODO (update)
//  - DELETE TODO
//  - GET ALL TODOS for a CATEGORY

 

//  - GET CATEGORIES
//  - POST CATEGORIES
//  - PUT CATEGORIES (update)
//  - DELETE CATEGORIES
// - Database NOT required
// - Data kept in memory (Static Object)
//     - endpoints edit data in memory
// - End Points are documented in APIreadme.md file
// - End Points must return JSON Formatted Data