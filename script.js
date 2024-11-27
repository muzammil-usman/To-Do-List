var userInp = document.getElementById("input");
var toDo = document.getElementById("toDo");

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
  deleteBtn.innerText = "Delete";
  tasksHandler.appendChild(deleteBtn);

  userInp.value = "";
}
