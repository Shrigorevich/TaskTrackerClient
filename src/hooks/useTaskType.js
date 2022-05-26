
export const useTaskType = () => {
    const taskType = {
        TODO: "To do",
        INPROGRESS: "In progress",
        DONE: "Done"
    }

    return [taskType]
}

export default useTaskType