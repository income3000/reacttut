import logo from './logo.svg';
import Props1 from './Props1';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import './App.css';
import {useState} from 'react'

function App() {

  const [count, setCount] = useState(0)

  const plus=()=>{
    setCount(count +1)

  }
  const minus=()=>{
    setCount(count -1)

  }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {count}
        <button onClick={plus}>plus</button>
        <button onClick={minus}>minus</button>
      </header>
      <div>
        <Navbar />
     <TodoList />
      </div>
      <footer>
hello
      </footer>
    </div>
  );
}

export default App;
