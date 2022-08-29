import React from 'react';
import './slider.css';
import { Fade } from 'react-slideshow-image';

const fadeImages  = [
    {
      url: 'https://nguyenvu.store/wp-content/uploads/2022/08/tuan-le-ghe.webp',
      caption: ''
    },
    {
      url: 'https://nguyenvu.store/wp-content/uploads/2022/08/LG-promotion.webp',
      caption: ''
    },
    {
      url: 'https://nguyenvu.store/wp-content/uploads/2022/08/ghe-cong-thai-hoc-banner.webp',
      caption: ''
    },
  ];

function Sliders() {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img alt='12345' src={fadeImage.url} />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Sliders