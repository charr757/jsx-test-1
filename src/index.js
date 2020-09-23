// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React components
const App = () => {
  const buttonText = { text: 'Click me!' };

  return (
    <div>
      <label htmlFor="name" className="label">Enter name</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
}

// Take the React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
