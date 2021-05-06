import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState } from 'react';
import TopLeftMenu from './Components/TopLeftMenu';
import TopRightMenu from './Components/TopRightMenu';
import axios from 'axios'; 


const FetchMembers =(url) => {
  const [member, setMember] = useState(null);
  const[loading, setLoading] = useState(true);

  useEffect(async() => {
    const response = await fetch('http://localhost:8080/bothniabladet/Bothniabladet_backend/server/api/member/read.php');
    const data = await response.json();
    const[item] = data.results;
    setMember(item);
    setLoading(false);

  }, []);

  return {};
}



//Hämta bilder ur backend
   const fetchImages = async() =>{
    const urlImages= "http://localhost:8080/bothniabladet/Bothniabladet_backend/server/api/images/read.php";
    const res = await fetch(urlImages);
    const data = await res.json();

    this.setState( { imageData: data });
    };

    //Hämta medlemmar ur backend
    // const fetchMembers = async() => {
    //   const urlMembers = "http://localhost:8080/bothniabladet/Bothniabladet_backend/server/api/member/read.php";
    //   const res = await fetch(urlMembers);
    //   const data = await res.json();
    //   this.setState( {memberData: data});
    // };

//Ej färdig funktion
function FetchFromMember() {
  const[member, setMember]= useState(null);

  useEffect(async() => {
    const response = await fetch("http://localhost:8080/bothniabladet/Bothniabladet_backend/server/api/member/read.php");
    const memberinfo = await response.json();
    const[item] = memberinfo.data;
    setMember(item);
  }, []);
}


 
function App() {

  //Kod för fetch och display av api. 
  const[member, setMember] = useState(null);
  const[loading, setLoading] = useState(true);
  useEffect(async() => {
    const response = await fetch("http://localhost:8080/bothniabladet/Bothniabladet_backend/server/api/member/read.php");
    const datainfo = await response.json();
    const[item] = datainfo.data;
    setMember(item);
    setLoading(false);
  }, []);

  //Returnerar det första lagrade förnamnet i databasen. Om ingen koppling till databasen finns så returneras "...laddar medlem" istället
  return (
    <div>
      {loading ? <div> ...laddar medlem </div> : <div>{member.first_name} </div>}  
    </div>
  );
  
 
  // return (
  //   <main className="content"> 
  //     <h1> TestFetch</h1>
  //     <h2> Hämta bilder och medlemmar ur backend</h2>
  //   <div>
  //        <button className="fetchImagesBtn" onClick={fetchImages}>
  //          Hämta bilder
  //        </button>
  //       <button className="fetchMembersBtn" onClick ={fetchMembers}>
  //        Hämta medlemmar </button>
  //        <button className="countBtn" onClick = {Count}>Test
  //        </button>
  //      </div>
  //   </main>    
  // );
}

export default App;