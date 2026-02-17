const { createElement } = require("react");

let todos = [];

function addTodo() {
    todos.push({
        title:document.querySelector("input").value
    })
    render();
}

function render() {
    document.querySelector("#todolist").innerHTML = "";
    for(let i = 0; i < todos.length; i++) {
        const todo = todos[i];

        const divEl = createElement("div");
        const todoEl = createElement("h2");
        const deleteEl = createElement("button");

        todoEl.innerHTML = todo.title;

        deleteEl.onclick = function() {
            todos.splice(i, 1);
            render ();
        };

        divEl.appendChild(todoEl);
        divEl.appendChild(deleteEl);

        document.querySelector("#todolist").appendChild(divEl);
    }
}