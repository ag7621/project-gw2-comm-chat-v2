import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import List from './components/List';
import bossList from './Data';
import './App.css';

function App() {
  const [data, setData] = useState(bossList);
  const [selectedWing, setSelectedWing] = useState(1);
  const filteredList = data.filter((boss) => boss.wing === selectedWing);

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

  function handleActiveTab(e) {
    setSelectedWing(Number(e.target.value));
    console.log(filteredList);
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
        <h1>GW2 Chat</h1>
        <div className="tab-list">
          <button onClick={handleActiveTab} value={1}>
            Tab 1
          </button>
          <button onClick={handleActiveTab} value={2}>
            Tab 2
          </button>
          <button onClick={handleActiveTab} value={3}>
            Tab 3
          </button>
          <button onClick={handleActiveTab} value={4}>
            Tab 4
          </button>
        </div>
        <hr />
      </header>

      <main>
        <div className="tab-content">
          {filteredList.map((item) => (
            <>
              <h3>{item.name}</h3>
              <ol>
                {item.entries.map((entry) => (
                  <li>{entry.entry}</li>
                ))}
              </ol>
            </>
          ))}
        </div>
      </main>

      <hr />

      <Form onAddEntry={handleAddEntry} bossList={data} />
    </>
  );
}

export default App;
