import { useEffect, useState } from "react"

export const useTaskStorage = () => {

    const [state, setState] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));

        if(storedTasks && Array.isArray(storedTasks)) {
            setState(storedTasks);
        }
    }, [])

    const addTask = (task) => {
        
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        const tasks = storedTasks ? storedTasks : [];

        tasks.push(task);
        console.log("SET STATE: ", tasks);

        localStorage.setItem("tasks", JSON.stringify(tasks));
        setState(tasks);
    }

    return [state, addTask]
}

export default useTaskStorage