// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React components
const App = () => {
  return (
    <div>
      <label for="name" className="label">Enter name</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
    </div>
  );
}

// Take the React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
