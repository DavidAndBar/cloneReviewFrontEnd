import Task from "../task/Task";
import { useState } from "react";
import "./style.css"

const Form = () => {
    const [tasks, setTasks] = useState([]);

    const newTask = () => {
        if (tasks.length < 4) {
            const auxNewTask = [...tasks];
            auxNewTask.push(<form onSubmit={onSubmit} key={Date.now()}>
                                <Task onSubmit={onSubmit}/>
                            </form>);
            setTasks(auxNewTask);
        } else {
            alert("Too many list of tasks")
        }
        
    }

    const deleteTask = () => {
        const auxNewTask = [...tasks];
        auxNewTask.splice(0,1);
        setTasks(auxNewTask);
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return <>
        <div>
            <button type="button" className="newTaskButton" onClick={newTask}> New Day of tasks </button>
            <button type="button" className="deleteTaskButton" onClick={deleteTask}> Delete first list of tasks</button>
        </div>
        <div style={{display: "flex"}}>
            {tasks}
        </div>
    </>;

}

export default Form