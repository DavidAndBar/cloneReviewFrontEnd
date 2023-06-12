//import { useState } from "react";
import "./style.css";

const ItemList = ({item, setItem}) => {

    const isChecked = (checkbox) => { /* We take advantage of the value of the item clicked (id) to look for the complete information about the 
                                    that entry using item.find, we know the exact location in the array through the item.idexOf function. Then, if
                                    the completed attribute is true, once we click the button that attribute is set as false, same logic if it's false
                                    it turns true.*/
        const indexItem = item.indexOf(item.find(o => o.id === parseInt(checkbox.target.value))); // value is a string, so it needs to be transformed in int.
        item[indexItem].completed = !item[indexItem].completed
        console.log(item);
    };

    return <>
        { item.length === 0 ?
        <p>No tasks</p>:
        <table>
            <thead>
                <tr>
                    <th>Task description</th>
                    <th>Completed?</th>
                    <th>Delete task</th>
                </tr>
            </thead>
            {
                item.map( ({ id, task, completed}) => 
                <tbody key={id}>
                    <tr key={`row${id}`} className="row">
                        <td key={`task${id}`} className={`task-${ completed ? "" : "completed"}`}>{task}</td>
                        <td key={`input${id}`}><input type="checkbox" onClick={isChecked} value={id} defaultChecked={completed}/></td>
                        {/* This input is type checkbox to make it have 2 options, int his case, the task is completed or not. onClick attribute activate the 
                        function isChecked once it's clicked (more info in isChecked function). Value is setted as item.id as I need to give that value to 
                        isChecked function since they can read that variable from event.target.value*/}
                        <td key={`button${id}`}><button type="button">Delete Task</button></td>
                    </tr>
                </tbody>)
            }
            
        </table>}
    </>
}

export default ItemList;