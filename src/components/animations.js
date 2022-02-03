import React from 'react';
import Zoom from 'react-reveal/Zoom';

class zoomAnimation extends React.Component {
  render() {
    return (
      <div>
        <Zoom>
          <h1>               
            <a href="https://bobtarino.github.io/portfolio2.0/">
             Robert Tarino
            </a>
          </h1>
        </Zoom>
      </div>
    );
  }
}

export default zoomAnimation;