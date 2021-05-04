import React, {useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from 'axios';

class Member extends React.Component{
    
    apiURL = ''; //URL till API
    state = {
        members: [] //Tom medlemslista som sedan fylls på med
        //info ur medlemsentiteten i mysqldatabasen
    }

    componentDidMount() {
        axios.get(this.apiURL)
        .then(result => {
            const members = result.data;
            this.setState({members});
        })
    }

    render(){
        return( 
        
        <ul>
            { this.state.members.map(member => 
            <li> {member.ID_member}</li>)}
        </ul>
        );
    }
}

ReactDOM.render(<Member/>, document.getElementById('root'))

class App extends React.Component {
    
    render(){
        return <h1> TEST </h1>
        
    }
}


const app = new App();
app.render();

//ReactDOM.render(<app />, document.getElementById('root'));



//export default App;

