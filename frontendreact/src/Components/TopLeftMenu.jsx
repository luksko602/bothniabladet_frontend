import React from 'react';
/* Klass för övre vänstra menyn på webbapplikationen*/
class TopLeftMenu extends React.Component{

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
      </div>
  
    }
  };
  export default TopLeftMenu;