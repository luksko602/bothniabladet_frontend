import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState } from 'react';
import TopLeftMenu from './Components/TopLeftMenu';
import TopRightMenu from './Components/TopRightMenu';
import Footer from './Components/Footer';
import axios from 'axios'; 


 
function App() {
  // //Kod för fetch och display av en medlem ur api. 
  const[member, setMember] = useState(null);
  const[loading, setLoading] = useState(true);
  
  //Fetch av bilder
  var fetchURL = 'http://localhost:8080/bothniabladet/Bothniabladet_backend/server/api/image/read.php';
  fetch(fetchURL)
  .then(res => res.blob())
  .then(blob => {
    let img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    document.querySelector("body").appendChild(img);
  })



 //useEffect för medlemshämtning
  useEffect(async() => {  
    //Hämta medlem genom fetch
    const response = await fetch("http://localhost:8080/bothniabladet/Bothniabladet_backend/server/api/member/read.php");
    const datainfo = await response.json();
    const[item] = datainfo.data;
    setMember(item);
    setLoading(false);
  }, []);


  return (
    <React.Fragment>
    <TopLeftMenu/>
    <TopRightMenu/>
    <Footer/>

    
    
    <div>
      {loading ? <div> ...laddar medlem </div> : <div>{member.first_name} </div>}  
    </div>

    </React.Fragment>
    
  );
  
}

export default App;