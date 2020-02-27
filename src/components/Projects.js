import React, {Component} from 'react';
import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from "react-mdl"

class Projects extends Component{

  constructor(props){
    super(props);
    this.state = {activeTab: 0};
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div>
       <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
        <CardTitle style={{color: "#fff", height: "176px", background: "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"}}>React Project</CardTitle>

        <CardText>
          Dolor id Lorem veniam culpa consequat velit eu occaecat consectetur nisi labore irure enim.
        </CardText>
        <CardActions border style={{textAlign: "center"}}>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: "#fff"}}>
          <IconButton name="share"/>
        </CardMenu>

        <CardTitle style={{color: "#fff", height: "176px", background: "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"}}>React Project</CardTitle>

        <CardText>
          Dolor id Lorem veniam culpa consequat velit eu occaecat consectetur nisi labore irure enim.
        </CardText>
        <CardActions border style={{textAlign: "center"}}>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: "#fff"}}>
          <IconButton name="share"/>
        </CardMenu>

        <CardTitle style={{color: "#fff", height: "176px", background: "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"}}>React Project</CardTitle>

        <CardText>
          Dolor id Lorem veniam culpa consequat velit eu occaecat consectetur nisi labore irure enim.
        </CardText>
        <CardActions border style={{textAlign: "center"}}>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: "#fff"}}>
          <IconButton name="share"/>
        </CardMenu>
       </Card>

       </div>

       
      
      )

    }else if(this.state.activeTab === 1){
      return (
        <div><h1>This is Angular</h1></div>
      )
    }else if(this.state.activeTab === 2){
      return (
        <div><h1>This is Vue</h1></div>
      )
    }else if(this.state.activeTab === 3){
      return (
        <div><h1>This is NodeJS</h1></div>
      )
    }
   

  }


  render(){
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>NodeJS</Tab>
          <Tab>Javascript</Tab>
        </Tabs>


          <Grid className="projects-grid">
            <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div> 
            </Cell>
          </Grid>

      </div>
    ) 
  }
}

export default Projects;