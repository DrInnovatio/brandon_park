import React, {Component} from 'react';
import {Grid, Cell} from "react-mdl"
import myself from "../images/JW.png";

class Landing extends Component{
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img 
              src={myself}
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Web Developer</h1>
              <hr/>
              <p>HTML/CSS • React • JavaScript • Java • NodeJS • C# • Python • R • Ruby and Ruby on rails</p>

              <div className="social-links">

                  {/* LinkedIn */}
                  <a href="https://linkedin.com/in/jaewoo-brandon-park-28b83a97" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin " aria-hidden="true"/>
                  </a>
                  
                  {/* Github */}
                  <a href="https://github.com/DrInnovatio" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github " aria-hidden="true"/>
                  </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    ) 
  }
}

export default Landing;