import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">The Samaritan</h1>
                <p className="lead">
                  {' '}
                  Have you ever wondered how many people needed help at this precise minute that you could actually help?
                  Have you ever needed help with something minor and wished someone could have reached out to you?
                  If either one was you, this is the app for you.
                  Create a helper profile today, share posts and get help
                  from other helpers.
                </p>
                <hr />
                <a href="register.html" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </a>
                <a href="login.html" className="btn btn-lg btn-light">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
