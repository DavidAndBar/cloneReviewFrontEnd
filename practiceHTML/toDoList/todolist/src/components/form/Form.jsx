import {useState} from "react"

const Form = ({ item, setItem}) => {
    

    const AddItems = () => {
        const [input, setInput] = useState("");
        const handleChange = (event) => { /* event is called to the change in the element that is being called (input) */
            setInput(event.target.value);
        }

        const handleClick = () => {
            const listAuxiliar = [...item]; /* It's copied this way because as it's an array. 
                                            To make a copy of an object or array it must be by reference and not as we traditionaly do (as values) */
            listAuxiliar.push({
                id: Date.now(),
                task: input,
            completed: false});
            setItem(listAuxiliar);
            setInput("");
            /*setItem(item)*/
        }        
        
        return <p>  <input type="text" onChange={handleChange} value={input} placeholder="Add a task"/>
                    <button type="button" onClick={handleClick}>  Add task </button>
                </p>
    }

    const ItemList = () => {
        
        
        
        return <>
            { item.length === 0 ?
            <>
            <p>No tasks</p> 
            </>:
            <ul>
                {
                    item.map( item => <><li key={item.id}> {item.task} <input type="checkbox" /></li></>)
                }
            </ul>}</>
    
    }

    return <>
        <AddItems />
        <ItemList />
        </>;

}

export default Form