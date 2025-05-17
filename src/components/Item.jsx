import React from 'react';

function Item({ entryData }) {
  return (
    <>
      {/* <li>
        <p>{boss.name}</p>
      </li> */}
      <li>
        <h2>Boss name: {entryData.name}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda
          aliquam ipsa excepturi illo ullam quaerat rerum eaque iusto adipisci.
        </p>
      </li>
    </>
  );
}

export default Item;
