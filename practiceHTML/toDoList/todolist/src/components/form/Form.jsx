import Task from "../task/Task";
import { useState } from "react";
import "./style.css";

const Form = () => {
    const [numberOfLists, setNumberOfLists] = useState(!!JSON.parse(localStorage.getItem("numberOfLists")) ? 
                                                        JSON.parse(localStorage.getItem("numberOfLists")) : 
                                                        []);
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

    const [editTitle, setEditTitle] = useState(true);
    const [title, setTitle] = useState("Insert Title Here");

    const newTask = () => {
        if (numberOfLists.length < 4) {
            const newNumberOfList = [...numberOfLists];
            newNumberOfList.push("List")
            setNumberOfLists(newNumberOfList)
        } else {
            alert("Too many list of tasks")
        }
    }

    const saveTask = () => {
        localStorage.setItem("numberOfLists", JSON.stringify(numberOfLists,"List"))
        localStorage.setItem("List1", JSON.stringify(item1))
        localStorage.setItem("List2", JSON.stringify(item2))
        localStorage.setItem("List3", JSON.stringify(item3))
        localStorage.setItem("List4", JSON.stringify(item4))
        console.log("Tasks saved");
    }

    const deleteTask = () => {
        const newNumberOfList = [...numberOfLists];
        newNumberOfList.pop();
        setNumberOfLists(newNumberOfList);
    }
    
    const styleForm = {
        form1: {
            width: numberOfLists.length === 1 ? "100%" : 
                    numberOfLists.length === 2 ? "50%" : 
                    numberOfLists.length === 3 ? "33%" : 
                                                "23%",
        },
        form2: {
            width: numberOfLists.length === 1 ? "0%" : 
                    numberOfLists.length === 2 ? "50%" : 
                    numberOfLists.length === 3 ? "33%" : 
                                                "23%",
        },
        form3: {
            width: numberOfLists.length === 1 ? "0%" : 
                    numberOfLists.length === 2 ? "0%" : 
                    numberOfLists.length === 3 ? "33%" : 
                                                "23%",
        },
        form4: {
            width: numberOfLists.length === 1 ? "0%" : 
                    numberOfLists.length === 2 ? "0%" : 
                    numberOfLists.length === 3 ? "0%" : 
                                                "23%",
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const changeTitle = (event) => {
        setTitle(event.target.value)
    }

    const changeEditTitle = () => {
        setEditTitle(!editTitle);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setEditTitle(!editTitle)
        } 
    }

    return <>
        <div>
            <button type="button" className="newTaskButton" onClick={newTask}> New Day of tasks </button>
            <button type="button" className="deleteTaskButton" onClick={deleteTask}> Hide last list of tasks</button>
            <button type="button" className="saveTasksButton" onClick={saveTask}> Save uncompleted tasks in local Storage</button>
        </div>
        <div style={{display: "flex"}}>
            <form onSubmit={onSubmit} style={styleForm.form1}>
            { numberOfLists.length > 0 && 
            <h3>{editTitle ? 
                    <input value={title} onChange={changeTitle} onDoubleClick={changeEditTitle} onKeyDown={handleKeyDown} style={{margin: "auto", display: "block", borderWidth: "0px"}}/> : 
                    <p style={{textAlign: "center"}} onDoubleClick={changeEditTitle}>{title ? title : "No title"}</p>}
                <Task item={item1} setItem={setItem1}/></h3>}
            </form>
            <form onSubmit={onSubmit} style={styleForm.form2}>
            { numberOfLists.length > 1 && 
            <><h3 style={{textAlign: "center"}}> Tasks from College </h3>
            <Task item={item2} setItem={setItem2}/></>}
            </form>
            <form onSubmit={onSubmit} style={styleForm.form3}>
            { numberOfLists.length > 2 && 
            <><h3 style={{textAlign: "center"}}> Personal tasks </h3>
            <Task item={item3} setItem={setItem3}/></>}
            </form>
            <form onSubmit={onSubmit} style={styleForm.form4}>
            { numberOfLists.length > 3 && 
            <><h3 style={{textAlign: "center"}}> Other </h3>
            <Task item={item4} setItem={setItem4}/></>}
            {/*tasks*/}
            </form>
        </div>
    </>;

}

export default Form