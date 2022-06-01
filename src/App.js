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
            task.sortIndex = tasks.length;
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            setState(tasks);
        },
        updateTask: (taskType) => {
            const dragItem = JSON.parse(localStorage.getItem('dragItem'));
            const targetIndex = Number(localStorage.getItem('targetIndex'));

            let storedTasks = JSON.parse(localStorage.getItem('tasks'));

            const targetTask = storedTasks.find((el) => el.id === dragItem.id);

            const minV = Math.min(targetIndex, targetTask.sortIndex);
            const maxV = Math.max(targetIndex, targetTask.sortIndex);
            storedTasks = storedTasks.map((el) => {
                //if (el.id == targetTask.id) return el;
                // console.log(
                //     targetTask.sortIndex +
                //         ' ' +
                //         targetIndex +
                //         ' ' +
                //         el.sortIndex
                // );
                if (minV <= el.sortIndex && el.sortIndex <= maxV) {
                    if (
                        targetTask.sortIndex < targetIndex &&
                        targetIndex >= el.sortIndex
                    )
                        el.sortIndex -= 1;
                    else if (
                        targetTask.sortIndex > targetIndex &&
                        targetIndex <= el.sortIndex
                    )
                        el.sortIndex += 1;
                }
                return el;
            });
            targetTask.status = taskType;
            targetTask.sortIndex = targetIndex;
            console.log(storedTasks);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
            setState(storedTasks);
        },
    };

    return (
        <TaskContext.Provider value={taskStorage}>
            {children}
        </TaskContext.Provider>
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
