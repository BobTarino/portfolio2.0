import React from 'react';
import headshotImage from '../../assets/images/bobHeadshot.jpg';
import runBuddyImage from '../../assets/images/runBuddy.png';
import entertainMeImage from '../../assets/images/Entertain-Me.png';
import dinnerPartyImage from '../../assets/images/dinner-party2.png';
import resumeDoc from '../../assets/resume/Tarino_Robert_Resume.pdf';

const Project= ({ currentCategory }) => {
    
    const conditionalRender = () => {
        switch (currentCategory.name) {
            case 'About': 

                return <section id="main-bio">
                    <h2>About Me</h2>
                    <br></br>
                    <p>
                      Robert is a Rutgers University graduate with a degree in Communications. Junior Developer from River Edge, NJ. Now residing in Chicago, Il.
                    </p>
                    <br></br>
                    <img src={headshotImage} id="headshot-image" style={{ width: "100%" }} alt="Robert Tarino" />
                </section>
            
            case 'Portfolio':
            
                return     <section id="work-info">
                <h2>Portfolio</h2>
                <div className="flex-container">
                  <div className="work">
                   <a href="https://bobtarino.github.io/run-buddy/">
                      <img id="runbuddy-image" src={runBuddyImage} alt="Run Buddy Application" />
                    <figcaption>
                      Run Buddy 
                    </figcaption>
                    <a href="https://github.com/BobTarino/run-buddy">GitHub</a>
                    </a>
                    
                  </div>
                  <div className="work">
                    <a href="https://bobtarino.github.io/Entertain-Me/">
                      <img id="entertain-image" src={entertainMeImage} alt="Entertain-Me Application" />
                      <figcaption>
                        Entertain-Me
                      </figcaption>
                    </a>
                    <a href="https://github.com/BobTarino/Entertain-Me">GitHub</a>
                  </div>
                  <div className="work">
                    <a href="https://dinner-parties.herokuapp.com/">
                      <img id="dinnerparty-image" src={dinnerPartyImage} alt="Dinner Party Application" />
                      <figcaption>
                        Dinner Party
                      </figcaption>
                      <a href="https://github.com/BobTarino/dinner-party">GitHub</a>
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
                        <li>HTML</li>    
                        <li>CSS</li>   
                        <li>JavaScript</li>   
                        <li>JQuery</li>   
                        <li>responsive design</li>   
                        <li>React</li>   
                        <li>Bootstrap</li>   
                    </ul>
                </div>
                <br></br>
                <h3>Back-end Proficiencies</h3>
                <div>
                    <ul>
                        <li>APIs</li>    
                        <li>Node</li>   
                        <li>Express</li>   
                        <li>MySQL, Sequelize</li>   
                        <li>MongoDB, Mongoose</li>   
                        <li>REST</li>   
                        <li>GraphQL</li>   
                    </ul>
                </div>
            </section>;
                

            default:
                return <section id="main-bio">
                <h2>About Me</h2>
                <img src={headshotImage} style={{ width: "100%" }} alt="Robert Tarino" />
                <p>
                  Robert is a Rutgers University graduate with a degree in Communications. Junior Developer from River Edge, NJ. Now residing in Chicago, Il.
                </p>
            </section>;
        }
    }
    return <h1>{conditionalRender()}</h1>;
}


export default Project;