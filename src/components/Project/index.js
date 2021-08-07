import React, { } from 'react';

const Project= ({ currentCategory }) => {
    
    const conditionalRender = () => {
        switch (currentCategory.name) {
            case 'About': 

                return <h1>About</h1>;
            
            case 'Portfolio':
            
                return <h1>Portfolio</h1>;

            case 'Resume':

                return <h1>Resume</h1>;

            default:
                return <h1>About</h1>;
        }


    }
    return <h1>{conditionalRender()}</h1>;




}


export default Project;