const task_input = document.getElementById("task_input");
const add_btn = document.getElementById("add_btn");
const task_list = document.getElementById("task_list");

// Add new task
add_btn.addEventListener("click", function () {
  const task = task_input.value.trim();
  if (!task) {
    alert("Please enter a task!");
    return;
  }

  const list_item = document.createElement("li");

  const comp_btn = document.createElement("button");
  comp_btn.className = "comp_btn";
  comp_btn.textContent = "✔";

  const task_text = document.createElement("span");
  task_text.className = "task_text";
  task_text.textContent = task;

  const delete_btn = document.createElement("button");
  delete_btn.className = "delete_btn";
  delete_btn.textContent = "Delete";

  // complete toggle
  comp_btn.addEventListener("click", function () {
    if (comp_btn.textContent === "✔") {
      comp_btn.textContent = "✖";
    } else {
      comp_btn.textContent = "✔";
    }
    comp_btn.classList.toggle("marked");
    task_text.classList.toggle("task_marked");
  });

  // append to li
  list_item.appendChild(comp_btn);
  list_item.appendChild(task_text);
  list_item.appendChild(delete_btn);

  task_list.appendChild(list_item);

  task_input.value = "";
});

// Delete button for existing + new tasks (event delegation)
task_list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete_btn")) {
    e.target.parentElement.remove();
  }
});