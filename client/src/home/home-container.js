import React, { Component } from "react";
import { Button } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProfileContainer from "../profile/profile-container";
import { CustomLink } from "../common/custom-link";

class HomeContainer extends Component {
  render() {
      /* ToDo: figure out how to make buttons disappear
        https://reacttraining.com/react-router/web/example/custom-link
      */
    return (
      <Router>
        <div>
          <p>
            <Button waves="light">sign up</Button>
            <Link to="/profile" activeOnlyWhenExact={true}>
              <Button waves="light">sign in</Button>
            </Link>
          </p>
          <Route path="/profile" component={ProfileContainer} />
        </div>
      </Router>
    );
  }
}

export default HomeContainer;
