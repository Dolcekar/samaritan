import React from "react";
import { Parallax, Button, Row, Col } from 'react-materialize';

export default () => (
<div>
  <Parallax imageSrc='/img/findHelp.jpg'/>
  <div className="section  orange lighten-2 ">
    <div className=" row container ">
      <h2 className="header text-center">Join the World and Change It</h2>
      <p className="grey-text text-darken-3 lighten-3">We all need help, everyday, everywhere. 
      Join the Samaritans network, a place where people help one another.
      Create a helper profile today, share posts and get help
      from other helpers.</p>
      <Row>
        <Col s={6} className='grid'>
        <a class="amber darken-4 waves-effect waves-light btn-large" href="#">Sign Up </a>
        </Col>
      
        <Col s={6} className='grid'>
          <a class=" amber darken-4 waves-effect waves-light btn-large" href="#">LogIn </a>
        </Col>
      </Row>
      </div>
    </div>

  

  <Parallax imageSrc="/img/getHelp.jpg"/>

  <div className="footerContainer text-center orange lighten-2">
        <footer> Copyright &copy; {new Date().getFullYear()} The Samaritan</footer>

    </div>
</div>
)