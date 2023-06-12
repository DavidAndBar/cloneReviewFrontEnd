import {useState} from "react"
import Form from "./components/form/Form.jsx"


const App = () => {
  
  const initItem = [];

  const [item, setItem] = useState(initItem);
  
  const onSubmit = (e) => {
    e.preventDefault();
  }

  return <>
          <section>
            <h2> To do list: </h2>
            <form onSubmit={onSubmit}>
              <Form item={item} setItem={setItem}/>
            </form>
          </section>
        </>
  ;
}

export default App;
