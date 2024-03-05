import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import csharpIcon from './TWSIMAGES/languageslogo/csharp-150x150.png';
import wordpressIcon from './TWSIMAGES/languageslogo/wordpress-150x150.png';
import androidIcon from './TWSIMAGES/languageslogo/android-150x150.png';
import aspnetIcon from './TWSIMAGES/languageslogo/aspnet-150x150.png';
import reactNativeIcon from './TWSIMAGES/languageslogo/reactnative-150x150.png';
import laravelIcon from './TWSIMAGES/languageslogo/laravel-150x150.png';
import shopifyIcon from './TWSIMAGES/languageslogo/shopify-150x150.png';
import vueIcon from './TWSIMAGES/languageslogo/vue-150x150.png';
import railsIcon from './TWSIMAGES/languageslogo/rails-150x150.png';
import amazonIcon from './TWSIMAGES/languageslogo/aws-150x150.png';
import amazonIcon1 from './TWSIMAGES/languageslogo/aws01-150x150.png';
import Ios from './TWSIMAGES/languageslogo/ios-150x150.png';
import php from './TWSIMAGES/languageslogo/php-150x150.png';
import mgn from './TWSIMAGES/languageslogo/magento-150x150.png';
import SliderImages from './Slider';

function OurExperiance() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  // const imageStyle = {
  //   width: "160px",
  //   height: "150px",
  // };
const ImagesList = [
  {
    image: csharpIcon
  },
  {
    image: wordpressIcon
  },
  {
    image: androidIcon
  },
  {
    image: aspnetIcon
  },
  {
    image: reactNativeIcon
  },
  {
    image: laravelIcon
  },
  {
    image: shopifyIcon
  },
  {
    image: vueIcon
  },
  {
    image: railsIcon
  },
  {
    image: amazonIcon
  },
  {
    image: amazonIcon1
  },
  {
    image: Ios
  },
  {
    image: php
  },
  {
    image: mgn
  },
]
  return (
    <div>
      <h2 style={{ textAlign: "center", paddingBottom: "30px", 
      paddingTop: "20px", fontWeight: "bolder", fontSize: "50px" }}>
        Our Expertise</h2>
      <SliderImages Images={ImagesList}/>
    </div>
  )
}

export default OurExperiance;
