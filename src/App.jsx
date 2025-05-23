import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import List from './components/List';
import bossList from './Data';
import './App.css';
import CopyButton from './components/CopyButton';

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

  function handleDeleteEntry(entryId, bossName) {
    setData((prevData) =>
      prevData.map((boss) =>
        boss.name === bossName
          ? {
              ...boss,
              entries: boss.entries.filter((entry) => entry.id !== entryId),
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
    <div className="container">
      <header>
        <div>
          <h1>GW2 Chat</h1>
        </div>
        <nav>
          <button onClick={handleActiveTab} value={1}>
            Wing 1
          </button>
          <button onClick={handleActiveTab} value={2}>
            Wing 2
          </button>
          <button onClick={handleActiveTab} value={3}>
            Wing3
          </button>
          <button onClick={handleActiveTab} value={4}>
            Wing 4
          </button>
        </nav>
      </header>

      <main>
        <ul className="content">
          {filteredList.map((boss) => (
            <>
              {boss.entries.length > 0 ? (
                <li>
                  <h3>{boss.name}</h3>
                  <ol>
                    {boss.entries.map((entry) => (
                      <li>
                        <p>{entry.entry}</p>
                        <button
                          onClick={() => handleDeleteEntry(entry.id, boss.name)}
                        >
                          Delete
                        </button>
                        <CopyButton text={entry.entry} />
                      </li>
                    ))}
                  </ol>
                </li>
              ) : null}
            </>
          ))}
        </ul>
      </main>

      <footer>
        <Form onAddEntry={handleAddEntry} bossList={data} />
      </footer>
    </div>
  );
}

export default App;
