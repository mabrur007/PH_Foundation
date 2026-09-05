console.log("todo is working!");

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

// let btn = document.querySelector("#taskList");
// console.log(btn);
// console.log(taskInput, addBtn, taskList);

// addBtn.addEventListener("click", () => {
// 	console.log("Mouse clicked:", taskInput.value);
// });

// taskInput.addEventListener("keydown", (e) => {
// 	if (e.key === "Enter") {
// 		console.log("Enter Pressed:\n", taskInput.value);
// 		taskInput.value = "";
// 	}
// });

// video 4
// creating element in the dom

// addBtn.addEventListener("click", () => {
// 	let li = document.createElement("li");
// 	li.textContent = taskInput.value;
// 	taskList.appendChild(li);
// 	taskInput.value = "";
// });

// video 5
addBtn.addEventListener("click", () => {
	let li = document.createElement("li");
	li.textContent = taskInput.value;

	let btnWrapper = document.createElement("span");
	let completeTask = document.createElement("button");
	let deleteTask = document.createElement("button");

	completeTask.textContent = "Completed ✅";
	deleteTask.textContent = "Delete ❌";

	completeTask.addEventListener("click", () => {
		console.log(document.createAttribute("del"));
	});

	deleteTask.addEventListener("click", () => {
		taskList.removeChild(li);
	});

	btnWrapper.appendChild(completeTask);
	btnWrapper.appendChild(deleteTask);

	li.appendChild(btnWrapper);

	taskList.appendChild(li);

	taskInput.value = "";
});
