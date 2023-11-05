import { useState } from "react";

const Todo = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	const handleAddTask = () => {
		if (newTask.trim() !== "") {
			setTasks([...tasks, { text: newTask, done: false }]);
			setNewTask("");
		}
	};

	const handleToggleTask = (index) => {
		const updatedTasks = [...tasks];
		updatedTasks[index].done = !updatedTasks[index].done;
		setTasks(updatedTasks);
	};

	const handleDeleteTask = (index) => {
		const updatedTasks = [...tasks];
		updatedTasks.splice(index, 1);
		setTasks(updatedTasks);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="new task"
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
			/>
			<button onClick={handleAddTask}>Ajouter</button>
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>
						<input
							type="checkbox"
							checked={task.done}
							onChange={() => handleToggleTask(index)}
						/>
						<span
							style={{ textDecoration: task.done ? "line-through" : "none" }}>
							{task.text}
						</span>
						<button onClick={() => handleDeleteTask(index)}>Supprimer</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Todo;
