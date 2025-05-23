import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form({ onAddEntry, bossList }) {
  const [selectedBoss, setSelectedBoss] = useState('Vale Guardian');
  const [description, setDescription] = useState('');
  const [count, setCount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newId = uuidv4();
    const newEntry = { id: newId, entry: description };

    onAddEntry(selectedBoss, newEntry);

    setDescription('');
  }

  function handleOnChange(e) {
    setCount(e.target.value.length);
    setDescription(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Selected Boss Info</h3>
      <label>Boss: </label>
      <select onChange={(e) => setSelectedBoss(e.target.value)}>
        {bossList.map((item) => {
          return <option key={item.name}>{item.name}</option>;
        })}
      </select>

      <br />

      <textarea
        rows={4}
        cols={50}
        maxLength={199}
        value={description}
        onChange={handleOnChange}
        placeholder="description text"
      ></textarea>

      <br />
      <span>{count}/199 characters</span>
      <br />
      <button>Add Entry</button>
    </form>
  );
}

export default Form;
