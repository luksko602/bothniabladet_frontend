import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class TopLeftMenu{
  constructor(){

  }
  displayMenu(){
    <div class="topleftmenu">
        
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
    </div>
  }
}

//topleftmenu = new TopLeftMenu();
//document.write(topleftmenu.displayMenu());

class TopRightMenu{
  constructor(){

  }
  displayMenu(){

  }
}
//toprightmenu = new TopRightMenu();
//document.write(toprightmenu.displayMenu());



//EXEMPEL PÅ KLASS OCH METODER
/*class Car {
  constructor(name){
    this.brand = name;
  }
  present(){
    return 'I have a '+this.brand;
  }
}
const mycar = new Car("Ford");
document.write(mycar.present());
*/
//ReactDOM.render(mycar.present(), document.getElementById('root'));


//const myelement = <h1> I Love JSX </h1>
//ReactDOM.render(myelement,document.getElementById('root'))

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
