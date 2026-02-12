function addTodo() {
    const inputEl = document.querySelector("input");
    const todoText = inputEl.value;
    const spanEl = document.createElement("span");
    const buttonEl = document.createElement("button");
    spanEl.innerHTML = todoText;
    buttonEl.innerHTML = "Delete";

    if(todoText === "") {
        alert("Please enter a Todo");
    }

    const newDivEl = document.createElement("div");
    newDivEl.appendChild(spanEl);
    newDivEl.appendChild(buttonEl);

    document.querySelector("body").appendChild(newDivEl);
    inputEl.value = "";
}
