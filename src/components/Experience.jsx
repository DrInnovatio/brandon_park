import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";

class Experience extends Component{
  render(){
    return(
      <Grid>
        <Cell col={3}>
          <p style={{fontSize: "1.5rem"}}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={9}>
          <h4 style={{marginTop: "0px", color:"#ed6663"}}>{this.props.jobName}</h4>
          <h5 style={{marginTop: "0px"}}>{this.props.company}</h5>          
          <p>{this.props.jobDescription1}</p>
          <p>{this.props.jobDescription2}</p>
          <p>{this.props.jobDescription3}</p>
          <p>{this.props.jobDescription4}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;


