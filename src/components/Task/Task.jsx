import React from 'react';
import style from './Task.module.css';

export const Task = (props) => {
    const dragStartHandler = (e) => {
        localStorage.setItem('dragItem', JSON.stringify(props.task));
    };

    const dragEnterHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        localStorage.setItem('targetIndex', props.task.sortIndex);
    };

    return (
        <div
            draggable
            onDragEnter={dragEnterHandler}
            onDragStart={dragStartHandler}
            className={style.task}
        >
            <h4>{props.task.payload}</h4>
        </div>
    );
};

export default Task;
