import React, { Component } from "react";
import Navbar from './components/layout/Navbar';
import Parallax from './components/layout/Parallax'
import "./App.css";



class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
        <Parallax></Parallax>
      </div>
    );
  }
}

export default App;
