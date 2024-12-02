var userInp = document.getElementById("input");
var toDo = document.getElementById("toDo");
var li;
var hideInp;
var doneBtn;

function addTask() {
  if (userInp.value === "") {
    alert("Please enter your task");
    return;
  }

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
  editBtn.setAttribute("class", "editBtn");
  tasksHandler.appendChild(editBtn);
  var deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("onclick", "deleteTask(event)");
  deleteBtn.innerText = "Delete";
  deleteBtn.setAttribute("class", "deleteBtn");
  tasksHandler.appendChild(deleteBtn);
  doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.setAttribute("onclick", "doneTask(event)");
  doneBtn.setAttribute("class", "doneBtn");
  tasksHandler.appendChild(doneBtn);
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
  e.target.innerText = "save";
  e.target.nextElementSibling.innerText = "cancel";
  e.target.nextElementSibling.setAttribute("onclick", "cancelTask(event)");
  e.target.setAttribute("onclick", "saveEditTask(event)");
  return;
}

function saveEditTask(e) {
  e.target.previousElementSibling.previousElementSibling.style.display =
    "block";
  e.target.previousElementSibling.style.display = "none";
  e.target.innerText = "edit";
  e.target.setAttribute("onclick", "editTask(event)");
  e.target.nextElementSibling.innerText = "delete";
  e.target.previousElementSibling.previousElementSibling.innerText =
    e.target.previousElementSibling.value;
  return;
}

function doneTask(e) {
  e.target.style.display = "none";
  e.target.previousElementSibling.style.display = "none";
  e.target.previousElementSibling.previousElementSibling.style.display = "none";
  e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.textDecorationLine =
    "line-through";
}

function cancelTask(e) {
  e.target.previousElementSibling.innerText = "edit";
  e.target.previousElementSibling.setAttribute("onclick", "editTask(event)");
  e.target.previousElementSibling.previousElementSibling.style.display = "none";
  e.target.previousElementSibling.previousElementSibling.previousElementSibling.style.display =
    "block";
  e.target.innerText = "delete";
  e.target.setAttribute("onclick", "deleteTask(event)");
}
