const setEditModal = (isbn) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", `http://localhost:8000/todo/${isbn}`, false);
    xhttp.send();

    const todo = JSON.parse(xhttp.responseText);

    const {
        title,
        author,
    } = todo;

    document.getElementById('isbn').value = isbn;
    document.getElementById('title').value = title;
    document.getElementById('author').value = author;

    document.getElementById('editForm').action = `http://localhost:8000/todo/${isbn}`;
}

const deleteTodo = (isbn) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", `http://localhost:8000/todo/${isbn}`, false);
    xhttp.send();

    // Reloading the page
    location.reload();
}

const loadTodos = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:8000/todos", false);
    xhttp.send();

    const todos = JSON.parse(xhttp.responseText);

    for (let todo of todos) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${todo.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${todo.isbn}</h6>

                        <div>Category: ${todo.author}</div>

                        <hr>

                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#editTodoModal" onClick="setEditModal(${todo.isbn})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('todos').innerHTML = document.getElementById('todos').innerHTML + x;
    }
}

loadTodos();