import React, {  useState } from "react";
import './App.css';
import api from "./service/api";

function App() {
  
  const [steps, setSteps] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleClick = () => {
    console.log(userInput)
    console.log(steps)
    api
      .post("/testStage/conversational_predict",{
            inputs: userInput
      })
      .then((response) => {
        setSteps([...steps, "Me: "+userInput, "Bot: "+response.data["body"][0]["generated_text"]])
      })
      .catch((err) => {
        console.error("Vixe! ocorreu um erro" + err);
      });
  };
  
  const handleChange = (event) => {
    setUserInput(event.target.value)
  }

  return (
      <div className="App">
      <header className="App-header">
      <h1>DMTG</h1>
      <hr/>
      <h3>Envie uma mensagem</h3>
        <p>
          Utilizando o poder de um modelo essa mensagem ira hostear modelo pré-treinado para geração de text (GPT-like)
        </p>
        <p>
          Exemplo: "What is the capital of USA?"
        </p>
        <div>
          <hr/>
          {steps.map(( message ) => (
            <p>{message}</p>
          ))}
          <hr/>
        </div>
          <input onChange={handleChange} value={userInput} type="text" placeholder="Hello there" style={{width: "600px"}} />
          <hr/>
          <button onClick={handleClick}  >RUN</button>
      

      </header>
    </div>
  );

}


export default App;
