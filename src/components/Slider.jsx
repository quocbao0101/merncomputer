import React from 'react';
import './slider.css';
import { Fade } from 'react-slideshow-image';

function Slider({ data }) {
    return (
      <div className="slide-container">
        <Fade>
          {data.map((img, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img alt='12345' src={img.url} />
              </div>
              <h2>{img.caption}</h2>
            </div>
          ))}
        </Fade>
      </div>
    )
  }

export default Slider