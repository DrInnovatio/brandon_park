import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";

class Education extends Component{
  render(){
    return(
      <Grid>
        <Cell col={3}>
          <p style={{fontSize: "1.5rem"}}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>

        <Cell col={9}>
          <h4 style={{marginTop: "0px", color:"#ed6663"}}>{this.props.schoolName}</h4>
          <h5>{this.props.degree}</h5>
          {/* <p>{this.props.schoolDescription}</p>           */}
        </Cell>
      </Grid>
    ) 
  }
}

export default Education;
