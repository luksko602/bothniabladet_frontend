import React from 'react';
import ReactDOM, { render } from 'react-dom';

//STARTSIDAN
class StartPage extends React.Component{

  render(){
    return <div class="topleftmenu">
        
        <div id="startpagelink"> 
            <h1> <a href="index.html"> Bothniabladet</a> </h1>
        </div>
        
        <div id="explorelink"> 
            <h2> <a href="utforska.html"> Utforska </a> </h2>
        </div>
        
        <div id="gallerylink"> 
            <h2> <a href="bildgalleri.html">Bildgalleri </a></h2>
        </div>  
        
        <div id="contactlink"> 
            <h2> <a href="kontakt.html"> Kontakt </a> </h2>
        </div>
    </div> ;

  }

 
  //Metod för att koppla till databasen i backend
  connectToDB(){

  }
};

const startsida = new StartPage();
startsida.displaycontent();

ReactDOM.render(<StartPage/>, document.getElementById('root'));



/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();