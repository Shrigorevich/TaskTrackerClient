
export const useTaskType = () => {
    const taskType = {
        TODO: "To do",
        INPROGRESS: "In progress",
        DONE: "Done",
				CANCELED: "Canceled"
    }

    return [taskType]
}

export default useTaskType