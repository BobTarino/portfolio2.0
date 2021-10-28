import React from 'react';
import headshotImage from '../../assets/images/bobHeadshot.jpg';
import runBuddyImage from '../../assets/images/runBuddy.png';
import entertainMeImage from '../../assets/images/Entertain-Me.png';
import dinnerPartyImage from '../../assets/images/dinner-party2.png';
import reduxImage from '../../assets/images/redux2.png';
import resumeDoc from '../../assets/resume/Tarino_finalresume.docx.pdf';
import {FaGithub} from "react-icons/fa";

const Project= ({ currentCategory }) => {
    
    const conditionalRender = () => {
        switch (currentCategory.name) {
            case 'About': 

                return <section id="main-bio">
                    <h2>About Me</h2>
                    <br></br><br></br>
                    <div class="box">
                      <div class="column">
                        <img src={headshotImage} id="image" alt="Robert Tarino" />
                      </div>
                      <br></br><br></br>
                      <div class="column">
                        <div class="card">
                          <p>
                            BIO:
                            <br></br><br></br>
                            Robert, or "Bob" for short, is a passionate, hardworking Full Stack Web/App Developer with a focus in MERN stack (MongoDB, Express, React, & Node). 
                            <br></br><br></br>
                            <div>
                              Received:
                              <ul>
                                <li>BA in Communications at Rutgers University with a minor in Cinema Studies.</li>
                                <li>Certificate in Full Stack Web Development from the University of Utah through Trinity Education Services.</li>
                              </ul>
                              Other:
                              <br /><br />
                              Graduate of The Second City Training Center Writing Program in Chicago, IL.
                              <br /><br />
                              Certified in CPR/AED, Standard First Aid, and Bloodborne Pathogens (BLS) by the American Health Care Academy.
                              <br /><br />
                              Nationally ranked in Muay Thai and Savate Boxe-Française. 
                              <br /><br />
                              Born in River Edge, NJ. Currently residing in Chicago, IL.
                            </div>
                          </p>
                        </div>
                      </div>
                   </div>
                    <br></br>
                </section>
            
            case 'Portfolio':
            
                return <section id="work-info">
                <h2>Portfolio</h2>
                <br></br><br></br>
              <div className="flex-container">
                <div className="work">
                    <a href="https://entertain-me-redux.herokuapp.com/">
                      <img id="redux-image" src={reduxImage} alt="Entertain Me Version 2.0 Application" />
                      <div class="overlay">
                        <div class="cardtext">
                          Entertain Me! ver2.0
                          <br /><br />
                          A SPA that presents info on a specific movie, show, or video game based on certain user criteria. Discover new media, save it, and share playlists.
                          <br /><br />
                          <a href="https://github.com/BobTarino/entertain-me-redux"><FaGithub size={40} /></a>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="work">
                    <a href="https://dinner-parties.herokuapp.com/">
                      <img id="dinnerparty-image" src={dinnerPartyImage} alt="Dinner Party Application" />
                      <div class="overlay">
                        <div class="cardtext">
                            Dinner Party
                            <br /><br />
                            An application that arranges parties and get-togethers for friends based on collective interests.
                            <br /><br />
                            <a href="https://github.com/BobTarino/dinner-party"><FaGithub size={40} /></a>
                          </div>
                      </div>
                    </a>
                  </div>
                  <div className="work">
                    <a href="https://bobtarino.github.io/Entertain-Me/">
                      <img id="entertain-image" src={entertainMeImage} alt="Entertain-Me Application" />
                      <div class="overlay">
                        <div class="cardtext">
                            Entertain Me!
                            <br /><br />
                            An application that arranges parties and get-togethers for friends based on collective interests.
                            <br /><br />
                            <a href="https://github.com/BobTarino/Entertain-Me"><FaGithub size={40} /></a>
                          </div>
                      </div>
                    </a>
                  </div>
                  <br></br>
                  <div className="work">
                   <a href="https://bobtarino.github.io/run-buddy/">
                      <img id="runbuddy-image" src={runBuddyImage} alt="Run Buddy Application" />
                      <div class="overlay">
                        <div class="cardtext">
                            RUN BUDDY
                            <br /><br />
                            Front End demo for a fitness based application.
                            <br /><br />
                            <a href="https://github.com/BobTarino/run-buddy"><FaGithub size={40} /></a>
                          </div>
                      </div>
                    </a>
                  </div>
              </div>
          </section>;

            case 'Resume':

                return <section id="resume">
                <h2>Resume</h2>
                <p>
                  Download my <a href= {resumeDoc} download="resume">resume</a>
                </p>
                <br></br>
                <h3>Front-end Proficiencies</h3>
                <div>
                    <ul>
                        <li>HTML5</li>    
                        <li>CSS3</li>   
                        <li>JavaScript ES6+</li>   
                        <li>JQuery</li>   
                        <li>Responsive Design</li>   
                        <li>React</li>   
                        <li>Bootstrap</li>
                        <li>Handlebars</li> 
                        <li>Sass</li>     
                    </ul>
                </div>
                <br></br>
                <h3>Back-end Proficiencies</h3>
                <div>
                    <ul> 
                        <li>Node</li>   
                        <li>Express</li>   
                        <li>MySQL/Sequelize</li>   
                        <li>MongoDB/Mongoose</li>   
                        <li>REST</li>   
                        <li>GraphQL/Apollo</li> 
                        <li>APIs</li>     
                    </ul>
                </div>
            </section>;
                

            default:
                return <section id="main-bio">
                <h2>About Me</h2>
                <br></br><br></br>
                <div class="box">
                  <div class="column">
                    <img src={headshotImage} id="image" alt="Robert Tarino" />
                  </div>
                  <br></br><br></br>
                  <div class="column">
                    <div class="card">
                      <p>
                      Robert, or "Bob" for short, is a passionate, hardworking Full Stack Web/App Developer with a focus in MERN stack (MongoDB, Express, React, & Node). 
                        <br></br><br></br>
                        <div>
                          Received:
                          <ul>
                            <li>BA degree in Communications at Rutgers University with a minor in Cinema.</li>
                            <li>Certificate in Full Stack Web Development from the University of Utah through Trinity Education Services.</li>
                          </ul>
                          Other:
                          <br /><br />
                          Graduate of The Second City Training Center Writing Program in Chicago, IL.
                          <br /><br />
                          Certified in CPR/AED, Standard First Aid, and Bloodborne Pathogens (BLS) by the American Health Care Academy.
                          <br /><br />
                          Nationally ranked in Muay Thai and Savate Boxe-Française. 
                          <br /><br />
                          Born in River Edge, NJ. Currently residing in Chicago, IL.
                        </div>
                      </p>
                    </div>
                  </div>
               </div>
                <br></br>
            </section>;
        }
    }
    return <h1>{conditionalRender()}</h1>;
}


export default Project;