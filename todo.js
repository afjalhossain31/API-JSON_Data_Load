const loadTodo = () => {
  url = "https://jsonplaceholder.typicode.com/users/1/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayTodo(data);
    });
};

// Manage Aync/Await 
// 1. way -1
// const loadTodo = async () => {
//   const url = "https://jsonplaceholder.typicode.com/users/1/todos";
//   const res = await fetch(url);
//   const data = await res.json();
//   displayTodo(data);
// };




const displayTodo = (todos) => {
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";

  todos.forEach((todo) => {
    console.log(todo);

    const todoCard = document.createElement("div");
    todoCard.innerHTML = `
            <div class="todo-card">
            <p>${todo.completed == true ? '<i class="fa-regular fa-square-check"></i>' : '<i class="fa-solid fa-square-check"></i>'}  </p> 
            <h3>${todo.title}</h3>
            <p>Completed: ${todo.completed}</p>
            </div>
        `;
    todoContainer.appendChild(todoCard);
  });
};

loadTodo();
