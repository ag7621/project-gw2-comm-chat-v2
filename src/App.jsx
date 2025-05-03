import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <hr />

      <main>
        <List />
      </main>

      <hr />

      <Form />
    </>
  );
}

export default App;
