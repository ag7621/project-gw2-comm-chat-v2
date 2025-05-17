import React from 'react';

function Navbar({ onFilterChange }) {
  return (
    <div>
      <h1>GW2 Chat</h1>
      <nav>
        <button value={1} onClick={onFilterChange}>
          Wing 1
        </button>
        <button value={2} onClick={onFilterChange}>
          Wing 2
        </button>
        <button value={3} onClick={onFilterChange}>
          Wing 3
        </button>
        <button value={4} onClick={onFilterChange}>
          Wing 4
        </button>
        {/* <h3>Wing 1</h3>
        <h3>Wing 2</h3>
        <h3>Wing 3</h3>
        <h3>Wing 4</h3> */}
      </nav>
    </div>
  );
}

export default Navbar;
