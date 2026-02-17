let todos = [];

function addTodo() {
    todos.push({
        title:document.querySelector("input").value
    })
    render ();
}

function deleteFirstTodo() {
    todos.shift();
    render ();
}

function deleteLastTodo() {
    todos.pop();
    render ();
}

function render() {
    document.querySelector("#todolist").innerHTML = "";
    for(let i = 1; i < todos.length; i++) {
        const todo = todos[i];

        const divEl = document.createElement("div");
        divEl.setAttribute("id", 'todo-' + i);
        divEl.style.display = "flex";
        divEl.style.alignItems = "center";
        divEl.style.gap = "10px";
        divEl.style.margin = "5px";

        const headingEl = document.createElement("h2");
        headingEl.textContent = i + '. ' + todo.title;

        const todoEl = document.createElement("h2");
        const deleteEl = document.createElement("button");

        todoEl.innerHTML = todo.title;
        deleteEl.innerHTML = "Delete";

        deleteEl.onclick = function() {
            todos.splice(i, 1);
            render ();
        };

        divEl.appendChild(headingEl);
        divEl.appendChild(deleteEl);

        document.querySelector("#todolist").appendChild(divEl);
    }
}