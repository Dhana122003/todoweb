function addTask(){

    let taskInput = document.getElementById("taskInput");

    let taskValue = taskInput.value;

    // Validation
    if(taskValue.trim() === ""){
        alert("Please enter a task");
        return;
    }

    // Create li
    let li = document.createElement("li");

    li.className = "list-group-item";

    // Task Text
    let span = document.createElement("span");

    span.innerText = taskValue;

    // Complete Button
    let completeBtn = document.createElement("button");

    completeBtn.innerText = "Complete";

    completeBtn.className = "btn btn-success btn-sm";

    completeBtn.onclick = function(){

        span.classList.toggle("completed");

    };

    // Delete Button
    let deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.className = "btn btn-danger btn-sm";

    deleteBtn.onclick = function(){

        li.remove();

    };

    // Button Div
    let btnDiv = document.createElement("div");

    btnDiv.appendChild(completeBtn);

    btnDiv.appendChild(deleteBtn);

    // Append
    li.appendChild(span);

    li.appendChild(btnDiv);

    document.getElementById("taskList").appendChild(li);

    // Clear Input
    taskInput.value = "";
}