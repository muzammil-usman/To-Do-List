var userInp = document.getElementById("input");
var toDo = document.getElementById("toDo");
var li;

function addTask() {
  var tasksHandler = document.createElement("div");
  tasksHandler.setAttribute("class", "taskHandler");
  toDo.appendChild(tasksHandler);
  var checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  tasksHandler.appendChild(checkBox);
  var li = document.createElement("li");
  li.innerText = userInp.value;
  tasksHandler.appendChild(li);
  var editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  tasksHandler.appendChild(editBtn);
  var deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("onclick", "deleteTask(event)");
  deleteBtn.innerText = "Delete";
  tasksHandler.appendChild(deleteBtn);
  userInp.value = "";
}

function deleteTask(e) {
  return e.target.parentElement.remove();
}
