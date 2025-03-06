const tasks = document.querySelectorAll(".todo-item");
const deleteButtons = document.querySelectorAll(".todo-item button");

// localStorage.setItem("tasks", JSON.stringify([]));

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
  window.location.reload();
});

document.getElementById("clear-btn").addEventListener("click", () => {
  taskItems.splice(0, taskItems.length);
  localStorage.setItem("tasks", JSON.stringify([]));
  window.location.reload();
});

(() => {
  const tasksDiv = document.querySelector(".tasks");
  document.getElementById("number-of-tasks").innerHTML = taskItems.length;

  taskItems.forEach((taskItem) => {
    const item = document.createElement("div");
    item.className = "todo-item";
    const taskText = document.createElement("p");
    taskText.innerText = taskItem.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.display = "none";
    deleteBtn.onclick = () => {
      const itemToBeDeletedIndex = taskItems.findIndex(
        (item) => item.id === taskItem.id
      );
      taskItems.splice(itemToBeDeletedIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(taskItems));
      window.location.reload();
    };
    item.onmouseover = () => (deleteBtn.style.display = "block");
    item.onmouseleave = () => (deleteBtn.style.display = "none");
    item.appendChild(taskText);
    item.appendChild(deleteBtn);
    tasksDiv.appendChild(item);
  });
})();
