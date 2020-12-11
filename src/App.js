import React from 'react';
import './App.css';
import OneClickButton from "./components/OneClickButton/oneClickButton";
import ProfileDetails from "./components/ProfileDetails/profileDetails";

const App = () => {
  const profile = {
    name: 'Valeria',
    email: 'valezamora@gmail.com'
  };
  return (
    <div className="App">
      <header className="App-header">
        <ProfileDetails data={profile} />
        <OneClickButton />
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
