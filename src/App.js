import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, NavLink} from 'react-router-dom';
import signUpForm from './Components/signUpForm';

class App extends Component {
  render() {
    return (
    <Router basename="/">
      <div className="App">
        <div className="App__Aside">
        <h1 className="HeaderTitle">Want to Try TechCons Biz Software?</h1>
        <p className="HeaderParagraph">Sign Up Today For an Free Trial</p>
        </div>
        <div className="App__Form">
       
        <div className="FormTitle">
        <NavLink to="/" activeclassname="FormTitle__Link--Active" className="FormTitle__Link FormTitle__Link--Active">ลงทะเบียน</NavLink>
        </div>
        
          <Route exact path="/" component={signUpForm}>
              </Route>
        
 </div> 
      </div>
        </Router>
    );
  }
}

export default App;
