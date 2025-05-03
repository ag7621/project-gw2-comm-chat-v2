import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>GW2 Chat</h1>
        <nav>
          <h3>Wing 1</h3>
          <h3>Wing 2</h3>
          <h3>Wing 3</h3>
          <h3>Wing 4</h3>
        </nav>
      </header>

      <hr />

      <main>
        <ol>
          <li>
            <h2>Boss name:</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              assumenda aliquam ipsa excepturi illo ullam quaerat rerum eaque
              iusto adipisci.
            </p>
          </li>
          <li>
            <h2>Boss name:</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              assumenda aliquam ipsa excepturi illo ullam quaerat rerum eaque
              iusto adipisci.
            </p>
          </li>
        </ol>
      </main>

      <hr />

      <div className="input">
        <h3>Selected Boss Info</h3>
        <label>Boss:</label>
        <select name="" id="">
          <option value="w1">Wing 1</option>
          <option value="w2">Wing 2</option>
        </select>
        <textarea name="" id="" placeholder="description text"></textarea>
        <span>x/150 characters</span>
      </div>
    </>
  );
}

export default App;
