import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ExplorePage from './ExplorePage';
import GalleryPage from './GalleryPage';
import ContactPage from './ContactPage';
import StartPage from './StartPage';
/* Klass för övre vänstra menyn på webbapplikationen*/
class TopLeftMenu extends React.Component{

    render() {
        return(
            <Router>
                <div class="topleftmenu">
           <div id="startpagelink"> 
               <h1> <Link to="/"> Bothniabladet</Link> </h1>
           </div>
          
           <div id="explorelink"> 
               <h2> <Link to ="/ExplorePage"> Utforska</Link></h2>
           </div>
          
           <div id="gallerylink"> 
               <h2> <Link to ="/GalleryPage"> Bildgalleri </Link></h2>
           </div>  
          
           <div id="contactlink"> 
              <h2> <Link to="/ContactPage"> Kontakt </Link> </h2>
           </div>
       </div>

       <Switch>
           <Route path="/ExplorePage">
               <ExplorePage/>
           </Route>
           <Route path="/GalleryPage">
               <GalleryPage/>
           </Route>
           <Route>
               <Route path="/ContactPage">
                   <ContactPage/>
               </Route>
           </Route>
           <Route path="/StartPage">
               <StartPage/>
           </Route>
       </Switch>
            </Router>
        );
    }
    StartPage(){
        return <h2> Bothniabladet </h2>
    }
  };
  export default TopLeftMenu;