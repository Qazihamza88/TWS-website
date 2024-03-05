import React from 'react'
import Slider from 'react-slick';

function SliderImages({Images}) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
      const imageStyle = {
        width: "140px",
        height: "140px",
      };

  return (
    <div className="slider-container">
        <div>
          <Slider {...settings} >
           {Images?.map((item,index) => (
            <div className="Sliderimg">
                <img src={item.image} alt="" style={imageStyle} />
            </div>
           ))}
          </Slider>
        </div>
      </div>
  )
}

export default SliderImages
