let todos = [];

function addTodo() {
    const input = document.querySelector("input");

    if(input.value === '') {
        alert("Enter a Todo");
    } else {
        todos.push({
        title: input.value
    })
    render ();
    }
    input.value = "";
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
    for(let i = 0; i < todos.length; i++) {
        const todo = todos[i];

        const divEl = document.createElement("div");
        divEl.setAttribute("id", 'todo-' + i);
        divEl.style.display = "flex";
        divEl.style.alignItems = "center";
        divEl.style.gap = "10px";
        divEl.style.margin = "5px";

        const headingEl = document.createElement("h2");
        headingEl.textContent = (i + 1)+ '. ' + todo.title;

        const todoEl = document.createElement("h2");
        const deleteEl = document.createElement("button");
        const updateEL = document.createElement("button")
        deleteEl.classList.add("delete-button");
        updateEL.classList.add("update-button");

        todoEl.innerHTML = todo.title;
        deleteEl.innerHTML = "Delete";
        updateEL.innerHTML = "Update";

        deleteEl.onclick = function() {
            todos.splice(i, 1);
            render ();
        };

        updateEL.onclick = function() {
            const newTodo = prompt("Update your todo:", todos[i].title);

            if(newTodo !== null && newTodo.trim() !== "") {
                todos[i].title = newTodo;
                render ();
            }
        }

        divEl.appendChild(headingEl);
        divEl.appendChild(deleteEl);
        divEl.appendChild(updateEL);

        document.querySelector("#todolist").appendChild(divEl);
    }
}