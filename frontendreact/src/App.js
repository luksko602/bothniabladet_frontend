import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState } from 'react';
import TopLeftMenu from './Components/TopLeftMenu';
import TopRightMenu from './Components/TopRightMenu';
import Footer from './Components/Footer';
import StartPage from './Components/StartPage';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";





 
function App() {

  const memberReadAPI = 'http://localhost:8080/bothniabladet/Bothniabladet_backend/server/api/member/read.php';
  
  // //Kod för fetch och display av en medlem ur api. 
  const[member, setMember] = useState(null);
  const[loadingMember, setLoadingMember] = useState(true);

 //useEffect för medlemshämtning
  useEffect(async() => {

    //Hämta medlem genom fetch
    const response = await fetch(memberReadAPI);
    const datainfo = await response.json();

    const[item] = datainfo.data;


    setMember(item);
    setLoadingMember(false);
  }, []);

  async function getMembers() {
    let url = 'http://localhost:8080/bothniabladet/Bothniabladet_backend/server/api/member/read.php'

    while(url) {
      const res = await fetch(url)
      const data = await res.json()

      for(const item of data.results) {
        console.log(item.name)
      }

      url = data.next
    }
    return(
      <h1> Test </h1>
    )
  }
  getMembers().catch(e => console.error('Misslyckades med att hämta medlemmar', e))


  // // //Fetch av bilder
  var fetchImageAPI = 'http://localhost:8080/bothniabladet/Bothniabladet_backend/server/api/image/read.php';
  fetch(fetchImageAPI)
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

    <div id="displayImage">
      <h1> Visa en bild </h1>
    </div>

    <div id="displayMember">
      <h1> Medlemstabell</h1>
      {loadingMember ? <div> Laddar medlemmar... </div> : 
      <div key={member.ID_member}> <table> 
        <tr> 
          <th> ID </th>
          <th> Lösenord</th>
          <th>Förnamn </th>
          <th> Efternamn </th>
          <th> Stad </th>
          <th> Postnummer</th>
          <th> Gata </th>
          <th> Telefon </th>
          <th> E-post </th>
          <th> Discount_amount </th>

        </tr>
        <tr>
          <td> {member.ID_member}</td>
          <td> {member.password}</td>
          <td> {member.first_name}</td>
          <td> {member.last_name}</td>
          <td> {member.city} </td>
          <td> {member.postal}</td>
          <td> {member.street} </td>
          <td> {member.phone} </td>
          <td> {member.email} </td>
          <td> {member.discount_amount}</td>
        </tr>
        </table> 
        
        </div>}
    </div>

    {/* <div>
      {loadingMember ? <div> ...laddar medlem </div> : <div key={member.ID_member}>{member.last_name} </div>}  
    </div> */}

    </React.Fragment>

    
   
    
  );
  
}

export default App;