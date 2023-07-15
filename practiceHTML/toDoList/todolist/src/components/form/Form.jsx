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
            newNumberOfList.push("List");
            setNumberOfLists(newNumberOfList);
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

    saveTask();

    const deleteTask = (e) => {
        console.log(document.getElementById('select').value);
        if (document.getElementById('select').value === "List1") {
            // Title Changer :
            setTitle(
                [{
                    title1: JSON.parse(localStorage.getItem("titles"))[0]["title2"],
                    title2: JSON.parse(localStorage.getItem("titles"))[0]["title3"],
                    title3: JSON.parse(localStorage.getItem("titles"))[0]["title4"],
                    title4: "Insert Title Here"
                }]
            )
            // Items changer :
            setItem1(!!JSON.parse(localStorage.getItem("List2")) ? 
                        JSON.parse(localStorage.getItem("List2")) : 
                        []);
            setItem2(!!JSON.parse(localStorage.getItem("List3")) ? 
                        JSON.parse(localStorage.getItem("List3")) : 
                        []);
            setItem3(!!JSON.parse(localStorage.getItem("List4")) ? 
                        JSON.parse(localStorage.getItem("List4")) : 
                        []);
            setItem4([]);
        } else if (document.getElementById('select').value === "List2") {
            // Title Changer :
            setTitle(
                [{
                    title1: JSON.parse(localStorage.getItem("titles"))[0]["title1"],
                    title2: JSON.parse(localStorage.getItem("titles"))[0]["title3"],
                    title3: JSON.parse(localStorage.getItem("titles"))[0]["title4"],
                    title4: "Insert Title Here"
                }]
            )
            // Items changer :
            setItem2(!!JSON.parse(localStorage.getItem("List3")) ? 
                        JSON.parse(localStorage.getItem("List3")) : 
                        []);
            setItem3(!!JSON.parse(localStorage.getItem("List4")) ? 
                        JSON.parse(localStorage.getItem("List4")) : 
                        []);
            setItem4([]);
        } else if (document.getElementById('select').value === "List3") {
            // Title Changer :
            setTitle(
                [{
                    title1: JSON.parse(localStorage.getItem("titles"))[0]["title1"],
                    title2: JSON.parse(localStorage.getItem("titles"))[0]["title2"],
                    title3: JSON.parse(localStorage.getItem("titles"))[0]["title4"],
                    title4: "Insert Title Here"
                }]
            )
            // Items changer :
            setItem3(!!JSON.parse(localStorage.getItem("List4")) ? 
                        JSON.parse(localStorage.getItem("List4")) : 
                        []);
            setItem4([]);
        } else if (document.getElementById('select').value === "List4") {
            // Title Changer :
            setTitle(
                [{
                    title1: JSON.parse(localStorage.getItem("titles"))[0]["title1"],
                    title2: JSON.parse(localStorage.getItem("titles"))[0]["title2"],
                    title3: JSON.parse(localStorage.getItem("titles"))[0]["title3"],
                    title4: "Insert Title Here"
                }]
            )
            // Items changer :
            setItem4([]);
        } 

        const newNumberOfList = [...numberOfLists];
        newNumberOfList.pop();
        setNumberOfLists(newNumberOfList);
    }
    
    const styleForm = {
        container: {
            gridTemplateColumns: window.innerWidth < 550 ? "1fr": 
                                numberOfLists.length === 1  ? "0.5fr" :
                                numberOfLists.length === 2 ? "1fr 1fr" :
                                numberOfLists.length === 3 ? "1fr 1fr 1fr" :
                                                            "1fr 1fr 1fr 1fr"
        },
        form1: {
            display: numberOfLists.length === 0 && "none",
        },
        form2: {
            display: numberOfLists.length <= 1 && "none",
        },
        form3: {
            display: numberOfLists.length <=2 && "none",
        },
        form4: {
            display: numberOfLists.length <=3 && "none",
        },
        mainButton: {
            width: numberOfLists.length === 0 && "94%"
        },
        contButton: {
            gridTemplateColumns: numberOfLists.length === 0 && "1fr",
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const changeTitle = (event) => {
        const newTitle = [...title];
        if (event.target.id === "input1"){
            newTitle[0].title1 = event.target.value
        } else if (event.target.id === "input2"){
            newTitle[0].title2 = event.target.value
        } else if (event.target.id === "input3"){
            newTitle[0].title3 = event.target.value
        } else if (event.target.id === "input4"){
            newTitle[0].title4 = event.target.value
        }
        setTitle(newTitle)
    }

    const changeEditTitle = (event) => {
        const newEditTitle = [...editTitle];
        if (event.target.id === "input1"){
            newEditTitle[0].editTitle1 = !newEditTitle[0].editTitle1
        } else if (event.target.id === "input2"){
            newEditTitle[0].editTitle2 = !newEditTitle[0].editTitle2
        } else if (event.target.id === "input3"){
            newEditTitle[0].editTitle3 = !newEditTitle[0].editTitle3
        } else if (event.target.id === "input4"){
            newEditTitle[0].editTitle4 = !newEditTitle[0].editTitle4
        }  
        setEditTitle(newEditTitle)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === "Tab") {
            const newEditTitle = [...editTitle];
            if (e.target.id === "input1"){
                newEditTitle[0].editTitle1 = !newEditTitle[0].editTitle1
            } else if (e.target.id === "input2") {
                newEditTitle[0].editTitle2 = !newEditTitle[0].editTitle2
            } else if (e.target.id === "input3") {
                newEditTitle[0].editTitle3 = !newEditTitle[0].editTitle3
            } else if (e.target.id === "input4") {
                newEditTitle[0].editTitle4 = !newEditTitle[0].editTitle4
            }
            setEditTitle(newEditTitle)
        }
    }

    
    return <>
        <div className="contButton" style={styleForm.contButton}>
            <button type="button" className="newTaskButton mainButton" onClick={newTask} style={styleForm.mainButton}> New Day of tasks </button>
            <>{ numberOfLists.length === 0 ? <></> :   <div id="containerDelete">
                <>{title[0].title1 === "Insert Title Here" ? "" : <select id="select">
                    <>{title[0].title1 === "Insert Title Here" ? "": <option value="List1">{title[0].title1}</option>}</>
                    <>{title[0].title2 === "Insert Title Here" ? "": <option value="List2">{title[0].title2}</option>}</>
                    <>{title[0].title3 === "Insert Title Here" ? "": <option value="List3">{title[0].title3}</option>}</>
                    <>{title[0].title4 === "Insert Title Here" ? "": <option value="List4">{title[0].title4}</option>}</>
                </select>}</>
                <button type="button" className="deleteTaskButton mainButton" onClick={deleteTask}> Delete list of task</button>
            </div>}</>
        </div>
        <div className="container" style={styleForm.container}>
            <form className="formList" onSubmit={onSubmit} style={styleForm.form1}>
            <h3>{editTitle[0].editTitle1 ? 
                    <input id="input1" className="input" value={title[0].title1} onChange={changeTitle} onDoubleClick={changeEditTitle} onKeyDown={handleKeyDown}/> : 
                    <p id="input1" onDoubleClick={changeEditTitle}>{title[0].title1 ? title[0].title1 : "No title"}</p>}</h3>
                <Task item={item1} setItem={setItem1}/>
            </form>

            <form className="formList" onSubmit={onSubmit} style={styleForm.form2}>
            <h3>{editTitle[0].editTitle2 ? 
                    <input id="input2" className="input" value={title[0].title2} onChange={changeTitle} onDoubleClick={changeEditTitle} onKeyDown={handleKeyDown}/> : 
                    <p id="input2" onDoubleClick={changeEditTitle}>{title[0].title2 ? title[0].title2 : "No title"}</p>}</h3>
                <Task item={item2} setItem={setItem2}/>
            </form>

            <form className="formList" onSubmit={onSubmit} style={styleForm.form3}>
            <h3>{editTitle[0].editTitle3 ? 
                    <input id="input3" className="input" value={title[0].title3} onChange={changeTitle} onDoubleClick={changeEditTitle} onKeyDown={handleKeyDown}/> : 
                    <p id="input3" onDoubleClick={changeEditTitle}>{title[0].title3 ? title[0].title3 : "No title"}</p>}</h3>
                <Task item={item3} setItem={setItem3}/>
            </form>

            <form className="formList" onSubmit={onSubmit} style={styleForm.form4}>
            <h3>{editTitle[0].editTitle4 ? 
                    <input id="input4" className="input" value={title[0].title4} onChange={changeTitle} onDoubleClick={changeEditTitle} onKeyDown={handleKeyDown}/> : 
                    <p id="input4" onDoubleClick={changeEditTitle}>{title[0].title4 ? title[0].title4 : "No title"}</p>}</h3>
                <Task item={item4} setItem={setItem4}/>
            </form>
            {/*tasks*/}
        </div>
    </>;

}

export default Form