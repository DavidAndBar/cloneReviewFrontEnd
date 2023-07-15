
import Form from "./components/form/Form.jsx"


const App = () => {
  

  return <>
          <section>
            <h2 style={{textAlign: "center", fontFamily: "arial", fontSize:"1.5em"}}> 
              To do list: <br></br> 
              <p style={{textAlign: "center", fontFamily: "arial", fontSize:"0.5em"}}>
                To start, insert a new list of tasks and then insert the title double clicking in "Insert Title Here" and then double click again to save it!
              </p>  
            </h2>
              <Form />
          </section>
        </>
  ;
}

export default App;
