import React, { } from 'react';
import headshotImage from '../../assets/images/bobHeadshot.jpg';
import runBuddyImage from '../../assets/images/runBuddy.png';
import entertainMeImage from '../../assets/images/Entertain-Me.png';
import dinnerPartyImage from '../../assets/images/dinner-party2.png';

const Project= ({ currentCategory }) => {
    
    const conditionalRender = () => {
        switch (currentCategory.name) {
            case 'About': 

                return <section id="main-bio">
                    <h2>About Me</h2>
                    <img src={headshotImage} style={{ width: "100%" }} alt="Robert Tarino" />
                    <p>
                      Robert is a Rutgers University graduate with a degree in Communications. Junior Developer from River Edge, NJ. Now residing in Chicago, Il.
                    </p>
                </section>
            
            case 'Portfolio':
            
                return     <section id="work-info">
                <h2>Work</h2>
                <div class="flex-container">
                  <div class="work">
                   <a href="https://bobtarino.github.io/run-buddy/">
                      <img id="runbuddy-image" src={runBuddyImage} alt="Run Buddy Application" />
                    <figcaption>
                      Run Buddy
                    </figcaption>
                    </a>
                  </div>
                  <div class="work">
                    <a href="https://bobtarino.github.io/Entertain-Me/">
                      <img id="entertain-image" src={entertainMeImage} alt="Entertain-Me Application" />
                      <figcaption>
                        Entertain-Me
                      </figcaption>
                    </a>
                  </div>
                  <div class="work">
                    <a href="https://dinner-parties.herokuapp.com/">
                      <img id="dinnerparty-image" src={dinnerPartyImage} alt="Dinner Party Application" />
                      <figcaption>
                        Dinner Party
                      </figcaption>
                    </a>
                  </div>
                </div>
          </section>

            case 'Resume':

                return <h1>Resume</h1>;

            default:
                return <h1>About</h1>;
        }


    }
    return <h1>{conditionalRender()}</h1>;




}


export default Project;