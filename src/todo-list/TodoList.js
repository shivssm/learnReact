import { useState } from "react";

const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleAddTask = () => {
        setTasks([...tasks, task]);
        setTask('');
    }

    return (
        <>
        <h1>TodoList</h1>
        /**ADD, DELETE, MARK AS COMPLETE */

        <p>Add Task: </p>
        <input type="text" onChange={handleChange} value={task} />
        <button onClick={handleAddTask}>Add</button>

        {tasks.map((item, index)=>{
           return <><h4 key={index}>{item}</h4><button>DELETE</button></>
        })}
        </>
    )
}

export default TodoList;