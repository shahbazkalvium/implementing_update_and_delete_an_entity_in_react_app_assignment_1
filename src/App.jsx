import React from 'react';
import './App.css';
import UpdateItem from './components/UpdateItem';


// use the following link to get the data
// /doors will give you all the doors, to get a specific door use /doors/1.
const API_URI = http://${import.meta.env.VITE_API_URI}/doors;

function App() {
  return (
    <div className="App">
      <h1>Update Item Example</h1>
      <UpdateItem apiUri={API_URI} />
    </div>
  );
}

export default App;