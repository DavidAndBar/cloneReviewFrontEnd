/*import {useState} from "react" */
import AddItems from "../addItems/AddItems"
import ItemList from "../itemlist/ItemList";

const Form = ({ item, setItem}) => {

    return <>
        <AddItems item={item} setItem={setItem}/>
        <ItemList item={item}/>
        </>;

}

export default Form