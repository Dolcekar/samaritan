import React, { Component } from "react";
import { Button } from 'react-materialize';

class HomeContainer extends Component {
  render() {
    return (
      <div>
          <p>
              Homepage coming!
              <Button waves='light'>sign in</Button>
              <Button waves='light'>sign up</Button>
          </p>

      </div>


    );
  }
}

export default HomeContainer;