const todoForm = document.querySelector("#todo_form");
const list = document.querySelector("#todo_list");
const submit = document.querySelector("#todo_form input[type='submit']");

function addList(){

    const todoValue = todoForm.firstElementChild.value;

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const text = document.createTextNode(todoValue);

    const button = document.createElement("button");
    button.innerHTML = "X";
    

}
