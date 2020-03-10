import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
import {List, ListItem, ListItemContent} from 'react-mdl';
import myself from "../images/JW.png";

class Contact extends Component{
  render(){
    return(
      <div className="contact-body">
      <Grid className="contact-grid">
      <Cell col={6}>
      <h2>Jaewoo Brandon Park</h2>
      <img src={myself}
      alt="avatar"
      style={{width:"300px", height:"300px", borderRadius: "10px"}}
      />
      <p style={{width: "75%", margin: "30px auto", paadingTop: "1em"}}>
      A creative artist and media professional with over seven years in the industry, I have worked in recording studios and theatrical Stage environments. I have a proven track record of organising and seeing events through to completion. I’ve recently completed a Masters of Information Technology and am now seeking a new professional challenge as a web developer.
      </p>
      </Cell>
      <Cell col={6}>
      <h2>Contact Me</h2>
      <hr/>
      <div className="contact-list">
         <List>
            <ListItem>
              <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
              <i className="fa fa-phone-square" aria-hidden="true"/>0451 590 410
              </ListItemContent>
            </ListItem>   

            <ListItem>
              <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
              <i className="fa fa-envelope" aria-hidden="true"/>turing1723@gmail.com
              </ListItemContent>
            </ListItem>
      
         </List>
      </div>
      </Cell>
      </Grid>
      </div>
      ) 
    }
  }
  
  export default Contact;