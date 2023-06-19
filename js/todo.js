const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const SAVED_TODOS_KEY = "SAVED_TODOS_KEY";

const saveToLocalStorage = () => {
  const childs = [];
  toDoList.childNodes.forEach(node => childs.push(node.childNodes[0].innerText));
  localStorage.setItem(SAVED_TODOS_KEY, JSON.stringify(childs));
}

const loadFromLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem(SAVED_TODOS_KEY));
  todos && todos.forEach(todo =>  addTodo(todo));
}

// const removeItem = (li) => { toDoList.removeChild(li); }
const rmeoveItem2 = (e) => { 
  // e.target == button
  // button parentNode or parentElement == li
  toDoList.removeChild(e.target.parentNode);
  saveToLocalStorage();
 }

const addTodo = (text) => {
  if(text === "") { return; }

  const li = document.createElement("li");

  const span = document.createElement("span"); span.innerText = text;
  li.appendChild(span);

  const removeButton = document.createElement("button"); 
  removeButton.innerText = "❌";
  // option 1 
  // removeButton.addEventListener("click", () => removeItem(li));
  // option 2
  removeButton.addEventListener("click", rmeoveItem2);
  removeButton.classList.add("remove");
  li.appendChild(removeButton);

  toDoList.appendChild(li);

  saveToLocalStorage();
};

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { value } = toDoInput;
  addTodo(value);
  toDoInput.value = "";
});

loadFromLocalStorage();