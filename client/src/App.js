import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Parallax from './components/layout/Parallax';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import "./App.css";
import Landing from "./components/layout/Landing";



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Route exact path="/" Component={ Landing } />
          <div className="Container">
          <Route exact path="/register" Component={ Register } />
          <Route exact path="/login" Component={ Login } />
          </div>
           <Parallax></Parallax>
       </div>
    </Router>
      
    );
  }
}

export default App;
