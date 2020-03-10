import React, {Component} from 'react';
import {Grid, Cell} from "react-mdl"
import ReactTypingEffect from "react-typing-effect";

import myself2 from "../images/JW2.jpg";

const ReactTypingEffectDemo = () => {
	return (
		<ReactTypingEffect style={{color:"#790c5a", fontFamily:"courier", fontSize:"14px", fontWeight: "bold"}}
			text={[
				"It is a truth universally acknowledged, that a competent developer with possession of the innovative mind, must be in want of a job. <!-- Pride and Programming -->"
			]}
			speed={50}
		/>
	);
};

class Landing extends Component{
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            
            <img 
              style={{width: "240px", height:"290px"}}
              src={myself2}
              alt="avatar"
              className="avatar-img"
            />
            <div style={{margin:"1.5%"}}>
            <ReactTypingEffectDemo/>
            </div>
            
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