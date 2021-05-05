import logo from './logo.svg';
import './App.css';
import React from 'react';

/*Klass för att hämta innehåll från databasen för att visa i 
front-end */
class FetchContent extends React.Component{

  //Fetch Images
  fetchImages = async() =>{
    const res = await fetch(
      "http://localhost/bothniabladet/Bothniabladet_backend/server/api/image/read.php"
    );
    const data = await res.json();
    this.setState({ ImageData: data });
  };

  //Fetch Members
}


function App() {
  var fetchcontent = new FetchContent();
  fetchcontent.fetchImages();
  
  return (
    <div className="App">
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

