import React from 'react';
import './slider.css';
import { Fade } from 'react-slideshow-image';


function Slider({ data }) {
  const buttonStyle = {
    width: "30px",
    background: 'none',
    color: 'black',
  };

  const properties = {
      prevArrow: <button style={{ ...buttonStyle }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:fill-black hover:text-white transition">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>,
      nextArrow: <button style={{ ...buttonStyle }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:fill-black hover:text-white transition">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
  }
    return (
      <div className="slide-container">
        <Fade {...properties}>
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