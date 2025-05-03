import React, { useState } from 'react';

function Form({ bossList }) {
  const [selectedBoss, setSelectedBoss] = useState('Vale Guardian');
  const [description, setDescription] = useState('');
  const [count, setCount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const newEntry = { entry: description };

    console.log(selectedBoss);
    console.log(newEntry);

    setDescription('');
  }

  function handleOnChange(e) {
    setDescription(e.target.value);
    setCount(e.target.value.length);
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
