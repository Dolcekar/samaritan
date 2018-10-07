import React from "react";
import { Parallax, Footer } from 'react-materialize';

export default () => (
<div>
  <Parallax imageSrc='/img/findHelp.jpg'/>
  <div className="section orange lighten-2">
    <div className="row container">
      <h2 className="header">Samaritans</h2>
      <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
    </div>
  </div>
  <Parallax imageSrc="/img/getHelp.jpg"/>
  <Footer className="orange-darken-1" copyrights=" &copy; 2018 Copyright Text">
  
</Footer>;
  
</div>
)