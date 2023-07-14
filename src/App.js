import React from 'react';
import "./App.css";
import Login from './Heather/Login';
import Navbar from './Heather/Navbar';
import Notes from './Heather/Notes';
import Resources from './Heather/Resources';
// import SafeExit from './Heather/SafeExit';

const App = () => {
  return (
    <div>
      <Navbar/>
      <h1>Welcome to My App</h1>
      <Login />
      <Notes/>
      <Resources/>
      {/* <SafeExit/> */}
    </div>
  );
};

export default App;
