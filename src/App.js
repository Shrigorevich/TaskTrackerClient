import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

export const TaskContext = React.createContext({});

const TaskContextProvider = ({ children }) => {
	const [state, setState] = useState([]);

	useEffect(() => {
		const storedTasks = JSON.parse(localStorage.getItem('tasks'));
		const tasks = storedTasks ?? [];
		setState(tasks);
	}, []);

	const taskStorage = {
		tasks: state,
		addTask: (task) => {
			const storedTasks = JSON.parse(localStorage.getItem('tasks'));
			const tasks = storedTasks ?? [];
			tasks.push(task);
			console.log('SET STATE: ', tasks);
			localStorage.setItem('tasks', JSON.stringify(tasks));
			setState(tasks);
		},
		updateTask: (taskType) => {
			const dragItem = JSON.parse(localStorage.getItem('dragItem'));
			const storedTasks = JSON.parse(localStorage.getItem('tasks'));

			storedTasks.find((el) => el.id === dragItem.id).status = taskType;
			localStorage.setItem('tasks', JSON.stringify(storedTasks));
			setState(storedTasks);
		},
	};

	return (
		<TaskContext.Provider value={taskStorage}>
			{children}
		</TaskContext.Provider >
	);
};

const App = () => {
	return (
		<div className={style.app}>
			<Header />
			<div className={style.flexWrapper}>
				<TaskContextProvider>
					{/* <AdminPanel /> */}
					<Layout />
				</TaskContextProvider>
			</div>
		</div>
	);
};

export default App;
