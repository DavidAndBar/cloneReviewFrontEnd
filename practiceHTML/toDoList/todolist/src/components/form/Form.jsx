/*import {useState} from "react" */
import AddItems from "../addItems/AddItems"
import ItemList from "../itemlist/ItemList";

const Form = ({ item, setItem}) => {

    return <>
        <AddItems item={item} setItem={setItem}/>
        <ItemList item={item} setItem={setItem}/>
        </>;

}

export default Form