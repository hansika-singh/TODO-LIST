let btn = document.querySelector("#mode");
const input=document.querySelector("#taskInput");
const list = document.querySelector("#list");
let current_mode = "light";

// CHANGE MODE
btn.addEventListener("click",() => {
    if(current_mode == "light"){
        current_mode = "dark";
    document.body.classList.add("dark");
    }
    else{
        current_mode = "light";
        document.body.classList.remove("dark");
    }
});

// CREATE TASKS
function createTask(taskText,completed=false){
        const task = document.createElement("div");
        task.classList.add("todo");

        const checkbox = document.createElement("input");
        checkbox.type="checkbox";
        checkbox.checked = completed;

        const text = document.createElement("span");
        text.textContent = taskText;

        const deletebtn = document.createElement("button");
        deletebtn.innerText = "X";
    
    checkbox.addEventListener("change",() => {
    if(checkbox.checked){
        text.classList.add("completed");
    } else{
        text.classList.remove("completed");
    }
    saveTasks();
    });
    deletebtn.addEventListener("click",()=> {
        task.remove();
        saveTasks();
    });

task.appendChild(checkbox);
task.appendChild(text);
task.appendChild(deletebtn);
list.appendChild(task);
}
// ADD TASK
input.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        const taskText = input.value;
        if(taskText === ""){
            return;
        }
        createTask(taskText);
        input.value = "";
        saveTasks();
    
}});
//SAVE TASKS
function saveTasks(){
    const tasks = [];
    document.querySelectorAll(".todo").forEach((task) => {
        const text = task.querySelector("span").textContent;
        const completed = task.querySelector("input").checked;

        tasks.push({
            text: text,
            completed: completed
        });
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
//LOAD TASK
function loadTasks(){
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach((savedTask) => {
        createTask(
            savedTask.text,
            savedTask.completed
        );
    });
}
loadTasks();
