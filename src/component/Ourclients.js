import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Frame1 from "./TWSIMAGES/logo/Frame1.png";
import image1 from './TWSIMAGES/ourclient/image1.jpeg';
import Image2 from './TWSIMAGES/ourclient/Image-2.jpeg';
import Image3 from './TWSIMAGES/ourclient/Image.3.jpeg';
import Image4 from './TWSIMAGES/ourclient/Image-4.jpeg';
import Image5 from './TWSIMAGES/ourclient/Image-5.jpeg';
import Image6 from './TWSIMAGES/ourclient/Image-6.jpeg';
import OurExperiance from './OurExperiance';

function Ourclients() {
    const style1 = {
        display: "flex",
        justifyContent: "center",
        fontSize: "45px",
        fontWeight: "bolder",
        textTransform: "uppercase",
        marginBottom: "70px",
        paddingTop:"70px"
      };
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
      return (
    <div>
      {/* width: "auto",height: "auto" */}
      <div className="slider-container">
      <h1 style={style1}>Our Clients</h1>
      <div className="client">
       {/* <div style={{ width: '1440px', padding: '0 0px' }}> */}
        <Slider {...settings} style={{ padding: '0 15px' }}>
          <div>
            <img src={image1} alt="Client 1" style={{ height: '180px', width: '100%', objectFit:'fill' }} />
          </div>
          <div>
            <img src={Image2} alt="Client 2" style={{ height: '180px', width: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={Image3} alt="Client 3" style={{ height: '180px', width: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={Image4} alt="Client 4" style={{ height: '180px', width: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={Image5} alt="Client 5" style={{ height: '180px', width: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={Image6} alt="Client 6" style={{ height: '180px', width: '100%', objectFit: 'cover' }} />
          </div>
        </Slider>
      {/* </div> */}
      </div>
    </div>
      <div style={{padding: "20px 15px",backgroundColor:"#F9F8F8"}}>
      <div className="row">
        {/* Right side image */}
        <div className="col-md-6 d-flex justify-content center align-items-center
         mb-5 order-md-2 mb-md-0">
          <div className="right-container">
            <img
              src={Frame1}
              alt="random pic"
              style={{ width: "425px", height: "440px" }}
            />
          </div>
        </div>
         <div className="col-md-6 order-md-1 d-flex align-items-center justify-content center">
          <div className="left-container">
            <h6 style={{ margin:"0px",fontSize: "25px",lineHeight:"1.9", marginBottom: "25px",
            fontWeight:"bolder",color:"#011627" ,fontFamily: "Inter, sans-serif"}}>
                Still have some queries? Let’s talk!<br/>
                You can send us a message via email or through<br/> 
                our social media! If not, give us a visit!
              </h6>
              <button className="btn btn-primary" 
              style={{paddingTop:"5px",paddingBottom:"5px",paddingLeft:"0px",
              paddingRight:"0px",width:"150px",fontSize:"20px", 
               borderRadius:"30px", background:"#3f7ec5" }} type="submit">
                Contact Us
              </button>
          </div>
        </div>
      </div>
    </div>
    <OurExperiance/>
      </div>
  )
}

export default Ourclients
