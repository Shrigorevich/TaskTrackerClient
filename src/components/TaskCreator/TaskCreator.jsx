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
            <div className={style.inputRow}>
                <label>Payload:</label>
                <input
                    type="text"
                    name="payload"
                    onChange={changeHandler}
                    value={form.title}
                />
            </div>
            <div className={style.inputRow}>
                <label>Assign user:</label>
                <input
                    type="text"
                    name="assignUser"
                    onChange={changeHandler}
                    value={form.title}
                />
            </div>
            <div className={style.inputRow}>
                <button onClick={createTask}>ADD</button>
            </div>
        </div>
    );
};

export default TaskCreator;
