// import { useState } from "react";

const ItemList = ({item}) => {

    const isChecked = (id) => { // I don't understand this very well, why is the id in this line exactly the one I want?
        console.log("Looking for an id", item.find(o => o.id === id));
        const checkedItem = item.find(o => o.id === id).id;
        const indexItem = item.indexOf(item.find(o => o.id === id))
        console.log("The thing I'm looking the index: ", "item.find");
        console.log("Checked item: ", checkedItem);
        console.log("index of item: ", indexItem);
        ;
    }


    return <>
        { item.length === 0 ?
        <p>No tasks</p>:
        <ul>
            {
                item.map( item => <><li key={item.id}> {item.task} {item.completed} 
                                    <input type="checkbox" onClick={isChecked(item.id)}/> 
                                    <button type="button">Delete Task</button>
                                    </li></>)
            }
        </ul>}
    </>

}

export default ItemList;