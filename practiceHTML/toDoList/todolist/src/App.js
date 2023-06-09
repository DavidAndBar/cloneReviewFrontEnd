import {useState} from "react"
import Form from "./components/form/Form.jsx"


const App = () => {
  
  const initItem = [];

  const [item, setItem] = useState(initItem);
  
  return <>
          <section>
            <h2> To do list: </h2>
            <Form item={item} setItem={setItem}/>
          </section>
        </>
  ;
}

export default App;
