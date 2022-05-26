import React, { useEffect, useState } from 'react'
import Task from '../Task/Task'
import style from './Column.module.css'

export const Column = (props) => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        
        setTasks(props.tasks)

    }, [props.tasks]);

    const dragEnterHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Drag enter");
    }

    const dragOverHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const dropHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        props.dropHandler(props.config.taskType);
    }

    return (
        <div onDragEnter={dragEnterHandler} onDrop={dropHandler} onDragOver={dragOverHandler} className={style.column}>
            <h3>{props.config.name}</h3>
            {tasks.map((item, i) => <Task key={i} task={item}/>)}
        </div>
    )
}

export default Column