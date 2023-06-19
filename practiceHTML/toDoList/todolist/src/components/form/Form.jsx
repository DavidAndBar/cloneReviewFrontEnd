import Task from "../task/Task";
import { useState } from "react";
import "./style.css"

const Form = () => {
    const [numberOfLists, setNumberOfLists] = useState([]);
    const [item1, setItem1] = useState(!!JSON.parse(localStorage.getItem("List1")) ? 
                                        JSON.parse(localStorage.getItem("List1")) : 
                                        []);
    const [item2, setItem2] = useState(!!JSON.parse(localStorage.getItem("List2")) ? 
                                        JSON.parse(localStorage.getItem("List2")) : 
                                        []);
    const [item3, setItem3] = useState(!!JSON.parse(localStorage.getItem("List3")) ? 
                                        JSON.parse(localStorage.getItem("List3")) : 
                                        []);
    const [item4, setItem4] = useState(!!JSON.parse(localStorage.getItem("List4")) ? 
                                        JSON.parse(localStorage.getItem("List4")) : 
                                        []);

    console.log(localStorage.getItem("List1"));
    console.log(JSON.parse(localStorage.getItem("List1")));
    console.log(item1);
    const newTask = () => {
        if (numberOfLists.length < 4) {
            const newNumberOfList = [...numberOfLists];
            newNumberOfList.push("List")
            setNumberOfLists(newNumberOfList)
        } else {
            alert("Too many list of tasks")
        }
        
    }

    const deleteTask = () => {
        console.log("Running if");
        const newNumberOfList = [...numberOfLists];
        newNumberOfList.pop();
        setNumberOfLists(newNumberOfList)
    }

    const saveTask = () => {
        localStorage.setItem("List1", JSON.stringify(item1))
        localStorage.setItem("List2", JSON.stringify(item2))
        localStorage.setItem("List3", JSON.stringify(item3))
        localStorage.setItem("List4", JSON.stringify(item4))
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
    }

    return <>
        <div>
            <button type="button" className="newTaskButton" onClick={newTask}> New Day of tasks </button>
            <button type="button" className="deleteTaskButton" onClick={deleteTask}> Delete first list of tasks</button>
            <button type="button" className="saveTasksButton" onClick={saveTask}> Save uncompleted tasks in local Storage</button>
        </div>
        <div style={{display: "flex"}}>
            <form onSubmit={onSubmit} >
            { numberOfLists.length > 0 && 
            <><Task item={item1} setItem={setItem1}/></>}
            </form>
            <form onSubmit={onSubmit} >
            { numberOfLists.length > 1 && 
            <><Task item={item2} setItem={setItem2}/></>}
            </form>
            <form onSubmit={onSubmit} >
            { numberOfLists.length > 2 && 
            <><Task item={item3} setItem={setItem3}/></>}
            </form>
            <form onSubmit={onSubmit} >
            { numberOfLists.length > 3 && 
            <><Task item={item4} setItem={setItem4}/></>}
            {/*tasks*/}
            </form>
        </div>
    </>;

}

export default Form