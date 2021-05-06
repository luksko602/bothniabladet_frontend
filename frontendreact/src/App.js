import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';

 
//Hämta bilder ur backend
   var fetchImages = async() =>{


    const url = "http://localhost:8080/bothniabladet/Bothniabladet_backend/server/api/member/read.php";
    const res = await fetch(url);
    const data = await res.json();

    this.setState( { imageData: data });
    };

    //Hämta medlemmar ur backend
    var fetchMembers = async() => {
      const res = await fetch(
        "http://localhost:8080/bothniabladet/Bothniabladet_backend/server/api/member/read.php"
      );
      const data = await res.json();
      this.setState( {memberData: data});
    };


function App() {
 

  return (
    
    <div className="App">
      <h1> TestFetch</h1>
      <h2> Hämta bilder och medlemmar ur backend</h2>


      <div>
        <button className="fetchImagesBtn" onClick={fetchImages}>
          Hämta bilder
        </button>
        <button className="fetchMembersBtn" onClick ={fetchMembers}>
        Hämta medlemmar </button>
      </div>


      
      


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
          
        </p>
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

