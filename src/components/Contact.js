import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
import {List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
  render(){
    return(
      <div className="contact-body">
      <Grid className="contact-grid">
      <Cell col={6}>
      <h2>Jaewoo Brandon Park</h2>
      <img src="https://spnimage.edaily.co.kr/images/photo/files/NP/P/2008/06/PP08062600042.JPG"
      alt="avatar"
      style={{height:"250px"}}
      />
      <p style={{width: "75%", margin: "30px auto", paadingTop: "1em"}}>
      Sint aliquip nostrud eu dolor cillum. Sint aliquip nostrud eu dolor cillum. Sint aliquip nostrud eu dolor cillum. Est ex ullamco ut amet ex occaecat laborum nostrud duis laborum id.
      </p>
      </Cell>
      <Cell col={6}>
      <h2>Contact Me</h2>
      <hr/>
      <div className="contact-list">
      <List>
      <ListItem>
      <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
        <i className="fa fa-phone-square" aria-hidden="true"/>
          (123) - 456 - 987
        </ListItemContent>
      </ListItem>
      <ListItem>
      <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
        <i className="fa fa-fax" aria-hidden="true"/>
          (123) - 456 - 987
        </ListItemContent>
      </ListItem>
      <ListItem>
      <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
        <i className="fa fa-envelope" aria-hidden="true"/>
        cool_guy@email.com
        </ListItemContent>
      </ListItem>
      <ListItem>
      <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
        <i className="fa fa-skype" aria-hidden="true"/>
          My Skype ID
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