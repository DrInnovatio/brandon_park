import React, {Component} from 'react';
import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from "react-mdl"
import crowd from "../images/crowd.png";
import NewRelic from "../images/NewRelic.png"
import pound from "../images/pound.png"

class Projects extends Component{

  constructor(props){
    super(props);
    this.state = {activeTab: 0};
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
      <div className="projects-grid">

         {/* React Project 1 */}
       <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
        <CardTitle style={{color: "#fff", height: "350px", backgroundImage: `url(${crowd})`}}>Crowd</CardTitle>
        <CardText>
          As I am a jobseeker, I have not done this project.
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

        {/* React Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
        <CardTitle style={{color: "#fff", height: "350px", background: "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"}}>React Project</CardTitle>
        <CardText>
          This project page is just to show my coding skill.
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

        {/* React Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
        <CardTitle style={{color: "#fff", height: "350px", backgroundImage: `url(${NewRelic})`}}>New Relic</CardTitle>
        <CardText>
          Dolor id Lorem veniam culpa consequat .
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
        <div className="projects-grid">

    {/* Javascript Project 1 */}
    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
    <CardTitle style={{color: "#fff", height: "350px", backgroundImage: `url(${pound})`}}>Javascript Project</CardTitle>
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

    {/* Javascript Project 2 */}
    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
    <CardTitle style={{color: "#fff", height: "350px", background: "url(http://www.getmdl.io/assets/demos/welcome_card.jpg)     center / cover"}}>Javascript Project</CardTitle>
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
      
    }else if(this.state.activeTab === 2){
      return (
         <div className="projects-grid">

    {/* NodeJS Project 1 */}
    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
    <CardTitle style={{color: "#fff", height: "350px", background: "url(http://www.getmdl.io/assets/demos/welcome_card.jpg)         center / cover"}}>NodeJS Project</CardTitle>
    <CardText>
     eu occaecat consectetur nisi labore irure enim.
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

    {/* NodeJS Project 2 */}
    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
    <CardTitle style={{color: "#fff", height: "350px", background: "url(http://www.getmdl.io/assets/demos/welcome_card.jpg)         center / cover"}}>NodeJS Project</CardTitle>
    <CardText>
     occaecat consectetur nisi labore irure enim.
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
      
    }else if(this.state.activeTab === 3){
      return (
        <div><h1>This is Python</h1></div>
      )
    }
  }

  render(){
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Javascript</Tab>
          <Tab>NodeJS</Tab>
          <Tab>Python</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div> 
          </Cell>
        </Grid>

      </div>
    ) 
  }
}

export default Projects;