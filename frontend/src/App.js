import logo from './logo.svg';
import './App.css';
import Chat from './Components/Chat';
import ChatGem from './Components/ChatGem';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1> AI providers:</h1>

      <h2> OpenAI ChatGPT</h2>
      <Chat />

      <h2> Google </h2>
      <ChatGem />
    </div>
  );
}

export default App;
