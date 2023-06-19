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

    const [editTitle, setEditTitle] = useState([{
        editTitle1: false,
        editTitle2: false,
        editTitle3: false,
        editTitle4: false,
    }]);

    const [title, setTitle] = useState(!!JSON.parse(localStorage.getItem("titles")) ?
                                        JSON.parse(localStorage.getItem("titles")) :
                                        [{
                                            title1: "Insert Title Here",
                                            title2: "Insert Title Here",
                                            title3: "Insert Title Here",
                                            title4: "Insert Title Here"
                                        }]);

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
        localStorage.setItem("titles", JSON.stringify(title))
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
            width: numberOfLists.length === 1 ? "0" : 
                    numberOfLists.length === 2 ? "50%" : 
                    numberOfLists.length === 3 ? "33%" : 
                                                "23%",
        },
        form3: {
            width: numberOfLists.length === 1 ? "0" : 
                    numberOfLists.length === 2 ? "0" : 
                    numberOfLists.length === 3 ? "33%" : 
                                                "23%",
        },
        form4: {
            width: numberOfLists.length === 1 ? "0" : 
                    numberOfLists.length === 2 ? "0" : 
                    numberOfLists.length === 3 ? "0" : 
                                                "23%",
        },
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const changeTitle = (event) => {
        const newTitle = [...title];
        if (event.target.className === "input1"){
            newTitle[0].title1 = event.target.value
        } else if (event.target.className === "input2"){
            newTitle[0].title2 = event.target.value
        } else if (event.target.className === "input3"){
            newTitle[0].title3 = event.target.value
        } else if (event.target.className === "input4"){
            newTitle[0].title4 = event.target.value
        } 
        setTitle(newTitle)
    }

    const changeEditTitle = (event) => {
        const newEditTitle = [...editTitle];
        if (event.target.className === "input1"){
            newEditTitle[0].editTitle1 = !newEditTitle[0].editTitle1
        } else if (event.target.className === "input2"){
            newEditTitle[0].editTitle2 = !newEditTitle[0].editTitle2
        } else if (event.target.className === "input3"){
            newEditTitle[0].editTitle3 = !newEditTitle[0].editTitle3
        } else if (event.target.className === "input4"){
            newEditTitle[0].editTitle4 = !newEditTitle[0].editTitle4
        }  
        setEditTitle(newEditTitle)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            const newEditTitle = [...editTitle];
            if (e.target.className === "input1"){
                newEditTitle[0].editTitle1 = !newEditTitle[0].editTitle1
            } else if (e.target.className === "input2") {
                newEditTitle[0].editTitle2 = !newEditTitle[0].editTitle2
            } else if (e.target.className === "input3") {
                newEditTitle[0].editTitle3 = !newEditTitle[0].editTitle3
            } else if (e.target.className === "input4") {
                newEditTitle[0].editTitle4 = !newEditTitle[0].editTitle4
            }
            setEditTitle(newEditTitle)
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
            <h3>{editTitle[0].editTitle1 ? 
                    <input className="input1" value={title[0].title1} onChange={changeTitle} onDoubleClick={changeEditTitle} onKeyDown={handleKeyDown} style={{margin: "auto", display: "block", borderWidth: "0px"}}/> : 
                    <p className="input1" style={{textAlign: "center"}} onDoubleClick={changeEditTitle}>{title[0].title1 ? title[0].title1 : "No title"}</p>}
                <Task item={item1} setItem={setItem1}/></h3>}
            </form>

            <form onSubmit={onSubmit} style={styleForm.form2}>
            { numberOfLists.length > 0 && 
            <h3>{editTitle[0].editTitle2 ? 
                    <input className="input2" value={title[0].title2} onChange={changeTitle} onDoubleClick={changeEditTitle} onKeyDown={handleKeyDown} style={{margin: "auto", display: "block", borderWidth: "0px"}}/> : 
                    <p className="input2" style={{textAlign: "center"}} onDoubleClick={changeEditTitle}>{title[0].title2 ? title[0].title2 : "No title"}</p>}
                <Task item={item2} setItem={setItem2}/></h3>}
            </form>

            <form onSubmit={onSubmit} style={styleForm.form3}>
            { numberOfLists.length > 0 && 
            <h3>{editTitle[0].editTitle3 ? 
                    <input className="input3" value={title[0].title3} onChange={changeTitle} onDoubleClick={changeEditTitle} onKeyDown={handleKeyDown} style={{margin: "auto", display: "block", borderWidth: "0px"}}/> : 
                    <p className="input3" style={{textAlign: "center"}} onDoubleClick={changeEditTitle}>{title[0].title3 ? title[0].title3 : "No title"}</p>}
                <Task item={item3} setItem={setItem3}/></h3>}
            </form>

            <form onSubmit={onSubmit} style={styleForm.form4}>
            { numberOfLists.length > 0 && 
            <h3>{editTitle[0].editTitle4 ? 
                    <input className="input4" value={title[0].title4} onChange={changeTitle} onDoubleClick={changeEditTitle} onKeyDown={handleKeyDown} style={{margin: "auto", display: "block", borderWidth: "0px"}}/> : 
                    <p className="input4" style={{textAlign: "center"}} onDoubleClick={changeEditTitle}>{title[0].title4 ? title[0].title4 : "No title"}</p>}
                <Task item={item4} setItem={setItem4}/></h3>}
            </form>
            {/*tasks*/}
        </div>
    </>;

}

export default Form