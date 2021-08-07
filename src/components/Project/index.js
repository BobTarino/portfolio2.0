import React from 'react';
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
                <h2>Portfolio</h2>
                <div class="flex-container">
                  <div class="work">
                   <a href="https://bobtarino.github.io/run-buddy/">
                      <img id="runbuddy-image" src={runBuddyImage} alt="Run Buddy Application" />
                    <figcaption>
                      Run Buddy 
                    </figcaption>
                    </a>
                    <a href="https://github.com/BobTarino/run-buddy">GitHub</a>
                  </div>
                  <div class="work">
                    <a href="https://bobtarino.github.io/Entertain-Me/">
                      <img id="entertain-image" src={entertainMeImage} alt="Entertain-Me Application" />
                      <figcaption>
                        Entertain-Me
                      </figcaption>
                    </a>
                    <a href="https://github.com/BobTarino/Entertain-Me">GitHub</a>
                  </div>
                  <div class="work">
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

                return <h2>Resume</h2>;

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