import { useState } from "react";

const AddItems = ({item, setItem}) => {
    const [input, setInput] = useState(""); /* input value is set as empty*/

    const handleChange = (event) => { /* event is called to the change the element that is being called (input) */
        setInput(event.target.value);
    }

    const handleClick = () => {
        if (input !== ""){
        const listAuxiliar = [...item]; /* It's copied this way because as it's an array. 
                                        To make a copy of an object or array it must be by reference and not as we traditionaly do (as values) */
        listAuxiliar.push({
                id: Date.now(),
                task: input,
                completed: false});
        setItem(listAuxiliar);
        setInput("");
        }
    }        
    
    return <p>  <input type="text" onChange={handleChange} value={input} placeholder="Add a task"/>
                <button type="submit" onClick={handleClick}>  Add task </button>
            </p>
}

export default AddItems;