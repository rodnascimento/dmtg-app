import logo from './logo.svg';
import './App.css';

function App() {
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
          Exemplo: "Me dê uma ideia criativa para festa de criança"
        </p>
        <form>
          <input type="text" placeholder="Hello there" style={{width: "600px"}} />
          <hr/>
          <input type="submit" value="RUN" />
        </form>
      </header>
    </div>
  );
}

export default App;
