let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let tasks = [];
let taskIdCounter = 1;

function render() {
	taskList.innerHTML = "";

	tasks.forEach((task) => {
		let li = document.createElement("li");

		let span = document.createElement("span");
		span.textContent = task.text;

		li.appendChild(span);

		taskList.appendChild(li);
	});
	taskInput.value = "";
}

function addTask() {
	let taskText = taskInput.value.trim();
	if (taskText == "") {
		return;
	}

	let addNewTask = {
		id: taskIdCounter++,
		text: taskText,
	};

	tasks.push(addNewTask);
	console.log(addNewTask);
	// taskInput.value = "";
	render();
}

addBtn.addEventListener("click", addTask);
