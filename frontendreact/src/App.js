import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState } from 'react';
import TopLeftMenu from './Components/TopLeftMenu';
import TopRightMenu from './Components/TopRightMenu';
import Footer from './Components/Footer';
import StartPage from './Components/StartPage';
import axios from 'axios'; 





 
function App() {


  
  // //Kod för fetch och display av en medlem ur api. 
  const[member, setMember] = useState(null);
  const[loadingMember, setLoadingMember] = useState(true);

 //useEffect för medlemshämtning
  useEffect(async() => {  
    //Hämta medlem genom fetch
    const response = await fetch("http://localhost:8080/bothniabladet/Bothniabladet_backend/server/api/member/read.php");
    const datainfo = await response.json();
    const[item] = datainfo.data;


    setMember(item);
    setLoadingMember(false);
  }, []);


  // const[image, setImage] = useState(null);
  // // //Fetch av bilder
  var fetchURL = 'http://localhost:8080/bothniabladet/Bothniabladet_backend/server/api/image/read.php';
  fetch(fetchURL)
  .then(res => res.blob())
  .then(blob => {
    let img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    document.querySelector("body").appendChild(img);
  });


  return (

    //Visa komponenter
    
    <React.Fragment>
    <TopLeftMenu/>
    <TopRightMenu/>
    <StartPage/>
    <Footer/>


    <div>
      {loadingMember ? <div> ...laddar medlem </div> : <div key={member.ID_member}>{member.last_name} </div>}  
    </div>

    </React.Fragment>

    
   
    
  );
  
}

export default App;