import React from 'react';
import Item from './Item';

function List({ entryData }) {
  return (
    // <>
    //   <h3>{wing.wing}</h3>
    //   <ol>
    //     {wing.bosses.map((boss) => (
    //       <Item boss={boss} />
    //     ))}
    //   </ol>
    // </>

    // <ol>

    //   {/* {entryData.map((bossName) => (
    //     <h3>{bossName.name}</h3>
    //   ))} */}
    //   {/* <Item/> */}
    // </ol>

    <>
      <h3>{entryData.name}</h3>
      <ol>
        <Item entryData={entryData} />
      </ol>
    </>
  );
}

export default List;
