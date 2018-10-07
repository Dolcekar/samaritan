import React, { Component } from 'react';
import {Navbar, NavItem, Button} from 'react-materialize';

export default () => (
      <Navbar className="orange lighten-2 grey-text text-darken-3" brand='The Samaritans ' right>
      <NavItem onClick={() => console.log('test click')}>Log In</NavItem>
      <NavItem href='components.html'><Button className="amber darken-4" waves='light' node='a' href='http://www.google.com'> Sign Up </Button></NavItem>
    </Navbar>
    );

