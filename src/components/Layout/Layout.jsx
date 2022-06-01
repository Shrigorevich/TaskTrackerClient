import React, { useContext } from 'react';
import useTaskType from '../../hooks/useTaskType';
import Column from '../Column/Column';
import style from './Layout.module.css';
import { TaskContext } from '../../App';
import TaskCreator from '../TaskCreator/TaskCreator';

export const Layout = () => {
    const [taskType] = useTaskType();
    const taskContext = useContext(TaskContext);
    const columns = [
        {
            name: '💪 To Do',
            taskType: taskType.TODO,
        },
        {
            name: '⏳ In Progress',
            taskType: taskType.INPROGRESS,
        },
        {
            name: '✅ Done',
            taskType: taskType.DONE,
        },
        {
            name: '❌ Canceled',
            taskType: taskType.CANCELED,
        },
    ];

    const dropHandler = (taskType) => {
        taskContext.updateTask(taskType);
    };

    // setTimeout(() => {

    //     setState(prevState => {
    //         return prevState.map(item => ({id: item.id, payload: item.payload+"LOL"}))
    //     });

    //     console.log(state);
    // }, 15000)

    return (
        <div className={style.layout}>
            <TaskCreator />
            {columns.map((item, i) => {
                return (
                    <Column
                        key={i}
                        config={item}
                        tasks={taskContext.tasks
                            .filter((task) => task.status === item.taskType)
                            .sort((a, b) => a.sortIndex - b.sortIndex)}
                        dropHandler={dropHandler}
                    />
                );
            })}
        </div>
    );
};

export default Layout;
