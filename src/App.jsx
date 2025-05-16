import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import List from './components/List';
import bossList from './Data';
import './App.css';

function App() {
  const [data, setData] = useState(bossList);

  function handleAddEntry(selectedBoss, newEntry) {
    setData((prevData) =>
      prevData.map((boss) =>
        boss.name === selectedBoss
          ? {
              ...boss,
              entries: [...boss.entries, newEntry],
            }
          : boss
      )
    );
  }

  useEffect(() => {
    console.log('data change: ', data);
    data.forEach((item) => {
      console.log(item);
    });
  }, [data]);

  return (
    <>
      <header>
        <Navbar />
        <hr />
      </header>

      <main>
        {/* <List entryData={data} /> */}
        {data.map((wing) => (
          // <h3>{wing.wing}</h3>
          <List wing={wing} />
        ))}
      </main>

      <hr />

      <Form onAddEntry={handleAddEntry} bossList={data} />
    </>
  );
}

export default App;
