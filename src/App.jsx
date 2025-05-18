import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import List from './components/List';
import bossList from './Data';
import './App.css';

function App() {
  const [data, setData] = useState(bossList);
  const [active, setActive] = useState('tab-1');

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
    setActive(e.target.id);
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
        {/* <Navbar onFilterChange={handleFilter} /> */}
        <div className="tab-list">
          <button id="tab-1" onClick={handleActiveTab} value={1}>
            Tab 1
          </button>
          <button id="tab-2" onClick={handleActiveTab} value={2}>
            Tab 2
          </button>
          <button id="tab-3" onClick={handleActiveTab} value={3}>
            Tab 3
          </button>
          <button id="tab-4" onClick={handleActiveTab} value={4}>
            Tab 4
          </button>
        </div>
        <hr />
      </header>

      <main>
        {/* <List entryData={data} /> */}
        {/* {data.map((wing) => (
          <List wing={wing} />
        ))} */}
        <div className="tab-content">
          {/* <div className={`tab-page ${active === 'tab-1' ? 'active' : ''}`}>
            <p>tab 1 content</p>
            {filteredList.map((item) => (
              <h2>{item.name}</h2>
            ))}
          </div> */}
          <div>
            {filteredList.map((item) => (
              <>
                <h3>{item.name}</h3>
                {item.entries.map((entry) => (
                  <p>{entry.entry}</p>
                ))}
              </>
            ))}
          </div>
          {/* <div className={`tab-page ${active === 'tab-2' ? 'active' : ''}`}>
            <p>tab 2 content</p>
          </div>
          <div className={`tab-page ${active === 'tab-3' ? 'active' : ''}`}>
            <p>tab 3 content</p>
          </div>
          <div className={`tab-page ${active === 'tab-4' ? 'active' : ''}`}>
            <p>tab 4 content</p>
          </div> */}
        </div>
      </main>

      <hr />

      <Form onAddEntry={handleAddEntry} bossList={data} />
    </>
  );
}

export default App;
