import React from 'react';
import Item from './Item';

function List({ wing }) {
  return (
    <>
      <h3>{wing.wing}</h3>
      <ol>
        {wing.bosses.map((boss) => (
          // <p>{boss.name}</p>
          <Item boss={boss} />
        ))}
      </ol>
    </>

    // <ol>

    //   {/* {entryData.map((bossName) => (
    //     <h3>{bossName.name}</h3>
    //   ))} */}
    //   {/* <Item/> */}
    // </ol>
  );
}

export default List;
