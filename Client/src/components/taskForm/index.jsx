import {useState} from react
import {useMutation} from @apollo/client

const TaskForm = () => {
    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [createTask, {error}] = useMutation(CREATE_TASK)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
        variables: {
            taskName,
            taskDescription
        }
        })
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <label for="taskName">Task Name:</label>
        <input
            type="text"
            placeholder="Your Input here"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
        />
        <label for ="taskDescription">Task Description: </label>
        <input
            type="text"
            placeholder="Your Input Here"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
        />
        <label for="employee">Assigned Employee</label>
        <select name= "employee">
            <option value="bob">bob</option>
            <option value="jane">jane</option>
            <option value="sue">sue</option>
        </select>
        <button type="submit">Create Task</button>
        {error && <p>Error creating task</p>}
        </form>
    )
}

export default TaskForm