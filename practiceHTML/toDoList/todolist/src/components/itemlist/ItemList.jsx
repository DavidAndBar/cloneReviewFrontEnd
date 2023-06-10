// import { useState } from "react";

const ItemList = ({item, setItem}) => {

    const isChecked = (id) => { // I don't understand this very well, why is the id in this line exactly the one I want?
        console.log("Looking for an id", item.find(o => o.id === id)); // This is just a test, I can delete in a while
        const checkedItem = item.find(o => o.id === id).id; // Save the entire entry
        const indexItem = item.indexOf(item.find(o => o.id === id)); // Look for the position of the entry i'm managing
        
        console.log("item: ", item);
        console.log("item[indexItem]: ", item[indexItem]);
        console.log("indexItem: ", indexItem);
        console.log("item[indexItem].completed: ", item[indexItem].completed);
        console.log("After this comes the if");
        if (item[indexItem].completed === false) { 
            item[indexItem].completed = true;
        } else {
            item[indexItem].completed = false;
        }
        
        console.log(item);
        console.log(item[indexItem]);
        console.log(indexItem);
        console.log(item[indexItem].completed);
    };

    const styleRow = {

    };

    return <>
        { item.length === 0 ?
        <p>No tasks</p>:
        <ul>
            {
                item.map( item => <><li key={item.id} style={styleRow}> {item.task} {item.completed} 
                                    <input type="checkbox" onClick={isChecked(item.id)}/> 
                                    <button type="button">Delete Task</button>
                                    </li></>)
            }
        </ul>}
    </>
}

export default ItemList;