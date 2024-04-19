//setting up variables

let theInput = document.querySelector(".add-task input");
let addButton = document.querySelector(".add-task .plus");
let tasksCointainer = document.querySelector(".tasks-contant");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

//Focus on input field
window.onload = function () {
    theInput.focus();
};

//adding tasks
addButton.onclick = function () {
    if (theInput.value === "") {
        swal("Write Your Task First")
    } else {
        let noTasksMessage = document.querySelector(".tasks-contant .no-tasks-message");
        if (document.body.contains(document.querySelector(".no-tasks-message"))) {

            noTasksMessage.remove();
        }
        // create span Element
        let mainSpan = document.createElement("span");
        // create Delete putton
        let deleteElement = document.createElement("span");
        //create the span text
        let text = document.createTextNode(theInput.value);
        // create the delete text
        let deleteText = document.createTextNode("Delete");
        // add text to span
        mainSpan.appendChild(text);
        //add class
        mainSpan.className = "task-box";
        // add delete text to span
        deleteElement.appendChild(deleteText);
        //add class
        deleteElement.className = "delete";

        //add delete button to main span
        mainSpan.appendChild(deleteElement);
        //add to main container
        tasksCointainer.appendChild(mainSpan);
        //empty input
        theInput.value = ""
        theInput.focus();
        // calculateTasks
        calculateTasks()
    };
};
document.addEventListener('click', function (e) {
    //Delet task 
    if (e.target.className == "delete") {
        e.target.parentNode.remove();
        //Check nuper of tasks inside the container
        if (tasksCointainer.childElementCount == 0) {
            createNoTasks()
        }
    }
    //finish task 
    if (e.target.classList.contains("task-box")) {
        e.target.classList.toggle("finished");
        
    }
    // calculateTasks
    calculateTasks()
});

//function to create no tasks message
function createNoTasks() {
    //create message span element
    let messageSpan = document.createElement("span");
    //create text message 
    let messageText = document.createTextNode(" No tasks to show");

    // add text yo span
    messageSpan.appendChild(messageText);
    messageSpan.className = 'no-tasks-message';
    //append
    tasksCointainer.appendChild(messageSpan);
};
function calculateTasks() {
    //calculation all tasks
    tasksCount.innerHTML = document.querySelectorAll(".tasks-contant .task-box").length
    //calculation all completed tasks
    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-contant .finished").length

}
