import { useState } from "react";

const ItemList = ({item, setItem}) => {

    const [checkedBox, setCheckedBox] = useState(false);

    const isChecked = (checkbox) => {
        console.log(checkbox.target.checked);
        console.log(checkbox.target.value);
        const indexItem = item.indexOf(item.find(o => o.id === parseInt(checkbox.target.value)));
        console.log(indexItem);
        if (item[indexItem].completed === true) {
            console.log("true");
            console.log("First: ", item);
            item[indexItem].completed = false;
            setItem(item)
            console.log("Then: ", item);
            setCheckedBox(true);
        } else {
            console.log("false");
            console.log("First: ", item);
            item[indexItem].completed = true;
            setItem(item)
            console.log("Then: ", item);
            setCheckedBox(false);
        }
        setItem(item)

        /*if(checkbox.checked) {
            console.log(checkbox.value+"True")
        }
        else {
            console.log(checkbox.value+"False")
        }
        console.log("id: ",id);
        console.log("Looking for an id", item.find(o => o.id === id)); // This is just a test, I can delete in a while, it saves the entire Entry
        const checkedItem = item.find(o => o.id === id).id; // Save the value of the id.
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
                                    <input type="checkbox" onClick={isChecked} defaultChecked={item.completed} value={item.id}/>
                                    <button type="button">Delete Task</button>
                                    </li></>)
            }
        </ul>}
    </>
}

export default ItemList;