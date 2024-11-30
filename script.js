var userInp = document.getElementById("input");
var toDo = document.getElementById("toDo");
var li;
var hideInp;

function addTask() {
  var tasksHandler = document.createElement("div");
  tasksHandler.setAttribute("class", "taskHandler");
  toDo.appendChild(tasksHandler);
  li = document.createElement("li");
  li.innerText = userInp.value;
  tasksHandler.appendChild(li);
  hideInp = document.createElement("input");
  hideInp.setAttribute("type", "text");
  hideInp.setAttribute("class", "hide");
  hideInp.setAttribute("autofocus", "autofocus");

  tasksHandler.appendChild(hideInp);
  var editBtn = document.createElement("button");
  editBtn.setAttribute("onclick", "editTask(event)");
  editBtn.innerText = "Edit";
  tasksHandler.appendChild(editBtn);
  var saveBtn = document.createElement("button");
  saveBtn.setAttribute("onclick", "saveEditTask(event)");
  saveBtn.innerText = "Save";
  tasksHandler.appendChild(saveBtn);
  var deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("onclick", "deleteTask(event)");
  deleteBtn.innerText = "Delete";
  tasksHandler.appendChild(deleteBtn);
  userInp.value = "";
  return;
}

function deleteTask(e) {
  e.target.parentElement.remove();
  return;
}

function editTask(e) {
  e.target.previousElementSibling.style.display = "block";
  e.target.previousElementSibling.value =
    e.target.previousElementSibling.previousElementSibling.innerText;
  e.target.previousElementSibling.focus();
  e.target.previousElementSibling.previousElementSibling.style.display = "none";
  return;
}

function saveEditTask(e) {}
