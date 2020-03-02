import React, {Component} from 'react';
import {Grid, Cell} from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import myself from "../images/JW.png";

class Resume extends Component{
  render(){
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: "center"}}>
              <img style={{width: "40%", height: "40%"}} src={myself}
              />
            </div>
            <h2 style={{paddingTop: "2em"}}> Brandon Park</h2>
            <h4 style={{color: "grey"}}>Programmer</h4>
            <hr style={{borderTop: "3px solid #833fb2", width:"50%"}}/>
            <p>Duis esse sint aute est sit enim laborum cupidatat. Nostrud qui adipisicing culpa ex ad magna. Minim exercitation voluptate cupidatat sunt ad consequat duis. Est nostrud esse sunt aute incididunt reprehenderit est in qui cillum veniam ea esse. Duis sint qui elit cillum incididunt quis magna consequat magna commodo veniam in. Nulla cupidatat sunt officia aliqua.</p>
            <hr style={{borderTop: "3px solid #833fb2", width:"50%"}} />
            <h5>Address</h5>
            <p>1 Google street South NewYork 20201</p>
            <h5>Phone</h5>
            <p>(123) - 567 - 0987</p>
            <h5>Email</h5>
            <p>nobody@gagool.com</p>
            <h5>Web</h5>
            <p>doubledown.com</p>
            <hr style={{borderTop: "3px solid #833fb2", width:"50%"}} />
          </Cell>
          <Cell style={{borderRadius:"20px"}} className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education 
              startYear={2013}
              endYear={2015}
              schoolName="Stony Brook University"
              schoolDescription="Enim est ullamco sit pariatur anim velit culpa tempor aliquip mollit laboris reprehenderit. Ad esse consectetur in ullamco sunt. Elit duis aute ex ex. Sint aute incididunt fugiat non aliquip esse eu exercitation commodo excepteur dolore eu sint ut."
            />
            <Education 
              startYear={2017}
              endYear={2019}
              schoolName="QUT University"
              schoolDescription="in ullamco sunt. Elit duis aute ex ex. Sint aute incididunt fugiat Enim est ullamco sit pariatur anim velit culpa tempor aliquip mollit laboris reprehenderit. Ad esse consectetur  non aliquip esse eu exercitation commodo excepteur dolore eu sint ut."
            />
            <hr style={{borderTop: "3px solid #ffbd69", width:"50%", margin: "auto"}}/>

            <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="aliquip mollit laboris reprehenderit. Ad esse consectetur  non aliquip esse eu exercitation commodo excepteur dolore eu sint ut in ullamco sunt. Elit duis aute ex ex. Sint aute incididunt fugiat Enim est ullamco sit pariatur anim velit culpa tempor aliquip mollit."
            />

            <Experience
              startYear={2012}
              endYear={2015}
              jobName="Second Job"
              jobDescription="aliquip mollit laboris reprehenderit. Ad esse consectetur  non aliquip esse eu exercitation commodo excepteur dolore eu sint ut in ullamco sunt. Elit duis aute ex ex. Sint aute incididunt fugiat Enim est ullamco sit pariatur anim velit culpa tempor aliquip mollit."
            />

            <hr style={{borderTop: "3px solid #ffbd69", width:"50%", margin: "auto"}}/>
            <h2>Skills</h2>
            <Skills
              skill="Javascript"
              progress={100}
            />
            <Skills
              skill="NodeJS"
              progress={70}
            />
            <Skills
              skill="React"
              progress={90}
            />
            <Skills
              skill="Java"
              progress={50}
            />
            <Skills
              skill="MongDB"
              progress={40}
            />
            <Skills
              skill="Python"
              progress={80}
            />

          </Cell>
        </Grid>
      </div>
    ) 
  }
}

export default Resume;
