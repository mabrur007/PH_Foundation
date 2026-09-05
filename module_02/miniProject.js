// mini project
let students = [
	{ id: 101, name: "Rahim", age: 30, department: "ECE" },
	{ id: 102, name: "Bashar", age: 23, department: "EEE" },
];

// function to add a new student in "students" array
function addStudent(name, age, dept) {
	let newId = students.length > 0 ? students[students.length - 1].id + 1 : 101;

	let newStudent = {
		id: newId,
		name: name,
		age: age,
		department: dept,
	};

	students.push(newStudent);
	console.log("Student added successfully!");
}

addStudent("Sitab", 23, "Bangla");

// function to see all the objects of "students" array
function getAllStudents() {
	for (let student of students) {
		console.log(student.name);
	}
}

getAllStudents();

// function to get a student by it's id
function findStudentById(id) {
	let foundStudent = null;

	for (let student of students) {
		if (student.id == id) {
			foundStudent = student;
			break;
		}
	}

	if (foundStudent) {
		console.log("Matched student:", foundStudent);
	} else {
		console.error("404 not found!");
	}
}

findStudentById(103);
