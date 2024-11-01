const userInput = document.getElementById("user");
const dateInput = document.getElementById("date");
const messageInput = document.getElementById("messsage");
const categoryInput= document.getElementById("category");
const addTaskButton = document.getElementById("one-button");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", () => {
    const user = userInput.value; // Fix variable name
    const date = dateInput.value; // Fix variable name
    const category = categoryInput.value; // Fix variable name

    if (user.trim() === "" || date === "") {
        alert("Please select an upcoming date for the deadline and enter a task.");
        return; // Don't add task if task or deadline is empty
    }

    const selectedDate = new Date(date);
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
        alert("Please select an upcoming date for the deadline.");
        return; // Don't add task if deadline is not in the future
    }

    const taskItem = document.createElement("div");
    taskItem.classList.add("user");
    taskItem.innerHTML = `
        <p>${user}</p>
        <p>Deadline: ${date}</p>
        <p>message: ${message}</p>
        <p>category: ${category}</p>
        
        <button class="mark-done">Mark Done</button>
    `;

    taskList.appendChild(taskItem);

    // Clear input fields after adding the task
    userInput.value = "";
    dateInput.value = ""; // Reset date input
    messageInput.value = "",
    categoryInput.value = ""; // Reset category input
});

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("mark-done")) {
        const taskItem = event.target.parentElement;
        taskItem.style.backgroundColor = "#f2f2f2";
        event.target.disabled = true;
    }
});
