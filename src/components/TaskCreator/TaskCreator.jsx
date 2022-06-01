import { useState, useContext } from 'react';
import useTaskType from '../../hooks/useTaskType';
import { TaskContext } from '../../App';
import style from './TaskCreator.module.css';

export const TaskCreator = () => {
	const [taskType] = useTaskType();
	const taskContext = useContext(TaskContext);

	const [form, setForm] = useState({
		payload: '',
		assignUser: '',
	});

	const changeHandler = (event) => {
		let value = event.target.value;
		setForm({ ...form, [event.target.name]: value });
	};

	const createTask = () => {
		taskContext.addTask({
			id: taskContext.tasks.length,
			payload: form.payload,
			assignUser: form.assignUser,
			status: taskType.TODO,
		});
	};

	return (
		<div className={style.taskCreator}>
			<h3>📝 New Task</h3>
			<div className={style.taskCreatorBox}>
				<div className={style.inputRow}>
					<input
						type="text"
						name="assignUser"
						placeholder="User"
						onChange={changeHandler}
						value={form.title}
					/>
				</div>
				<div className={style.inputRow}>
					<textarea
						type="text"
						name="payload"
						placeholder="Task"
						onChange={changeHandler}
						value={form.title}
					/>
				</div>
				<div className={style.inputRow}>
					<button onClick={createTask}>Add</button>
				</div>
			</div>
		</div>
	);
};

export default TaskCreator;
