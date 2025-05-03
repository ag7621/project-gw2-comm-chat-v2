import { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import List from './components/List';
import bossList from './Data';
import './App.css';

function App() {
  const [data, setData] = useState(bossList);

  return (
    <>
      <header>
        <Navbar />
        <hr />
      </header>

      <main>
        <List />
      </main>

      <hr />

      <Form bossList={data} />
    </>
  );
}

export default App;
