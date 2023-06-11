import { useState } from "react";

const ItemList = ({item, setItem}) => {

    const [checkedBox, setCheckedBox] = useState(false);

    const isChecked = (checkbox) => { // I don't understand this very well, why is the id in this line exactly the one I want?
        console.log(checkbox.target.checked);
        console.log(checkbox.target.value);
        if (checkbox.target.checked === true) {
            setCheckedBox(true);
        } else {
            setCheckedBox(false);
        }

        /*if(checkbox.checked) {
            console.log(checkbox.value+"True")
        }
        else {
            console.log(checkbox.value+"False")
        }
        console.log("id: ",id);
        console.log("Looking for an id", item.find(o => o.id === id)); // This is just a test, I can delete in a while
        const checkedItem = item.find(o => o.id === id).id; // Save the entire entry
        const indexItem = item.indexOf(item.find(o => o.id === id)); // Look for the position of the entry i'm managing
        console.log("item: ", item);
        console.log("item[indexItem]: ", item[indexItem]);
        console.log("indexItem: ", indexItem);
        console.log("CheckedItem: ", checkedItem);
        console.log("item[indexItem].completed: ", item[indexItem].completed);
        console.log("After this comes the if");
        if (item[indexItem].completed === false) {
            item[indexItem].completed = true;
            setItem(item);
        } else {
            item[indexItem].completed = false;
            setItem(item);
        }
        console.log(item);
        console.log(item[indexItem]);
        console.log(indexItem);
        console.log("CheckedItem: ", checkedItem);
        console.log(item[indexItem].completed);*/
    };

    return <>
        { item.length === 0 ?
        <p>No tasks</p>:
        <ul>
            {
                item.map( item => <><li key={item.id}> {item.task} {item.id}
                                    <input type="checkbox" onChange={isChecked} checked={item.completed} value={item.id}/>
                                    <button type="button">Delete Task</button>
                                    </li></>)
            }
        </ul>}
    </>
}

export default ItemList;