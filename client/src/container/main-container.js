import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HelpRequestContainer from "../requests/help-requests-container";
import HomeContainer from "../home/home-container";

class MainContainer extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/requests" component={HelpRequestContainer} />
        </div>
      </Router>
    );
  }
}

export default MainContainer;
