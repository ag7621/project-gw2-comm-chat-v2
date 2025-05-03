import React from 'react';

function Form() {
  return (
    <form>
      <h3>Selected Boss Info</h3>
      <label>Boss:</label>
      <select name="" id="">
        <option value="w1">Wing 1</option>
        <option value="w2">Wing 2</option>
      </select>
      <textarea name="" id="" placeholder="description text"></textarea>
      <span>x/150 characters</span>
      <button>Submit</button>
    </form>
  );
}

export default Form;
