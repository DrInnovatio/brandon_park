import React, {Component} from 'react';
import {Grid, Cell} from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import myself from "../images/JW.png";


class Resume extends Component{
  render(){
    return(
      <div className="resume-main">
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: "center"}}>
              <img style={{width: "40%", height: "40%", borderRadius:"5px"}} src={myself}
              />
            
            <h2 style={{paddingTop: "20px"}}> Jaewoo Brandon Park</h2>
            <h4 style={{color: "grey"}}>Web Developer</h4>
            <hr style={{borderTop: "3px solid #833fb2", width:"60%", margin:"auto"}}/>
            <p style={{paddingTop: "20px"}}>A creative artist and media professional with over seven years in the industry, I have worked in recording studios and theatrical stage environments. I have a proven track record of organising and
            seeing events through to completion. I’ve recently completed a Masters of Information Technology
            and am now seeking a new professional challenge as a web developer.</p>
            <hr style={{borderTop: "3px solid #833fb2", width:"60%", margin:"auto"}} />
      
            <h5 style={{color: "grey"}}>Phone</h5>
            <p>0451 - 590 - 410</p>

            <h5 style={{color: "grey"}}>Email</h5>
            <p>turing1723@gmail.com</p>

            <hr style={{borderTop: "3px solid #833fb2", width:"60%", margin:"auto"}} />
          </div>
          </Cell>
          <Cell style={{borderRadius:"20px"}} className="resume-right-col" col={8}>
            <h2 style={{paddingLeft: "10px"}}>Education</h2>
            
            <Education 
              startYear={2017}
              endYear={2019}
              schoolName="Queensland University of Technology (Brisbane QLD)"
              degree="Master of Information Technology (Computer Science)"
              
            />

            <Education 
              startYear={2017}
              endYear={2017}
              schoolName="KOSTA (Korea Software Technology Association)"
              degree="JAVA Programming Certificate"
            />

            <Education 
              startYear={2013}
              endYear={2015}
              schoolName="State university of New York at Stony Brook (New York)"
              degree="Master of Fine Art, Theatre Directing"
            />

            <Education 
              startYear={2000}
              endYear={2007}
              schoolName="Kyonggi University (Seoul, South Korea)"
              degree="Bachelor of Electronic Digital Music and Performance Arts"
            />            

            <hr style={{borderTop: "3px solid #ffbd69", width:"50%", margin: "auto"}}/>



            <h2 style={{paddingLeft: "10px"}}>Experience</h2>
            <Experience 
              startYear={"July 2015"}
              endYear={"May 2016"}
              jobName="Sales Staff (Full Time)"
              company="Koryo Bookstore in New York, New York, U.S.A"
              jobDescription1="• Engaged with customers, dealt with complaints and difficult customers while maintaining excellent customer service."
              jobDescription2="• Excellent time management skills and ability to prioritise tasks."
              jobDescription3="• Interpreted and implemented complex processes, including knowledge of international law regarding importing of goods. "
              jobDescription4="• Ensured goods were packed appropriately and complied with Australian and international regulation."
              />   


               <Experience 
              startYear={"January"}
              endYear={"March 2015"}
              jobName="Production Assistant (Full Time)"
              company="Zoetrope of Pregones Theatre AND Ludic Proxy of Walker Space (NYC)"
              jobDescription1="< Zoetrope > of Pregones Theatre (NYC) - Dir. Javier Antonio Gonzales"
              jobDescription2="< Ludic Proxy > of Walker Space (NYC) - Dir. Aya Ogawa"
              jobDescription3="• Worked for two productions as an assistant stage director. My major role was to support
                                setting up the stages and helping performers behind the stage. "
              jobDescription4="• Worked in a high-pressure environment assisting and anticipating the needs of performers."
              />


               <Experience 
              startYear={"July"}
              endYear={"August 2014"}
              jobName="Internship in Theatre and Writers Conference"
              company="At Stony Brook University, New York"
              jobDescription1="• Organised events and provided support for stage performances."
              jobDescription2="• Networked with many New York based artists."
              jobDescription3="• Attended a Talk with Julie Andrews."
              
              />    

              <Experience 
              startYear={"September 2008"}
              endYear={" June 2011"}
              jobName="Working Holiday in Australia   "
              company="Various farm and factory jobs in WA, VIC, QLD."
              />   

              <Experience 
              startYear={" July 2007"}
              endYear={"July 2008"}
              jobName="Guitar Teacher"
              company="Han-gook Music Institute in Seoul, Korea"
              jobDescription1="• Developed excellent communication skills through teaching guitar to high school students."
              jobDescription2="• Prepared lesson plans, scheduling, tailored lessons to individual students and provided constructive feedback."
              />
              

              <Experience 
              startYear={"June 2000"}
              endYear={"April 2001"}
              jobName="Concert Sound Engineer / Recording Engineer Assistant"
              company="YG Entertainment in Seoul, Korea"
              jobDescription1="• Knowledge of audio equipment setup and take-down as well as maintenance."
              jobDescription2="• Worked in high-pressure studio environment."              
              />        

              <Experience 
              startYear={"August 2007"}
              endYear={"January 2017"}
              jobName="Freelance Composer"
              company="• Wrote more than 20 songs for Korean and Chinese singers."
              jobDescription1="• Most famous song in my career is TF Boys : "
              jobDescription2="https://www.youtube.com/watch?v=K10sn6IomFM"              
              />            
  
            <hr style={{borderTop: "3px solid #ffbd69", width:"50%", margin: "auto"}}/>

            <h2 style={{paddingLeft: "10px"}}>Language</h2>
            <h5 style={{paddingLeft: "30%"}}>Fluent in English and Korean</h5>

            <hr style={{borderTop: "3px solid #ffbd69", width:"50%", margin: "auto"}}/>

            <h3 style={{paddingLeft: "10px"}}>Professional Membership</h3>
            <h5 style={{paddingLeft: "30%"}}>A member of ACS Australia</h5>          

            <hr style={{borderTop: "3px solid #ffbd69", width:"50%", margin: "auto"}}/>

            <h2 style={{paddingLeft: "10px"}}>Skills</h2>

            <Skills
              skill="HTML / CSS"
              progress={98}
            />

            <Skills
              skill="React"
              progress={90}
            />

            <Skills
              skill="Javascript"
              progress={85}
            />            

            <Skills
              skill="NodeJS"
              progress={80}
            />

            <Skills
              skill="Python"
              progress={80}
            />
            
            <Skills
              skill="Java"
              progress={70}
            />
            <Skills
              skill="MongDB"
              progress={50}
            />

          </Cell>
        </Grid>
      </div>
    ) 
  }
}

export default Resume;
