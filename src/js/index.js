const tasks = document.querySelectorAll(".todo-item");
const deleteButtons = document.querySelectorAll(".todo-item button");

// localStorage.setItem("tasks", JSON.stringify([]));

for (let button of deleteButtons) {
  button.style.display = "none";
}

for (let index = 0; index < tasks.length; index++) {
  tasks[index].addEventListener("mouseover", () => {
    for (let child of tasks[index].children) {
      child.style.display = "block";
    }
  });

  tasks[index].addEventListener("mouseleave", () => {
    for (let child in tasks[index].children) {
      tasks[index].children[tasks[index].children.length - 1].style.display =
        "none";
    }
  });
}

const taskItems = JSON.parse(localStorage.getItem("tasks"));
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  const input = document.querySelector("form input");
  event.preventDefault();
  taskItems.push({
    id: Math.round(Math.random() * 1000000),
    text: input.value,
  });
  localStorage.setItem("tasks", JSON.stringify(taskItems));

  alert(`${input.value} task successfully added`);
  input.value = "";
});
