import React from "react";
import "./Portfolio.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import agile from "./TWSIMAGES/logo/agile.png";
import image1 from './TWSIMAGES/Portfolio/1.png';
import Image2 from './TWSIMAGES/Portfolio/2.png';
import Image3 from './TWSIMAGES/Portfolio/3 .jpeg';
import Image4 from './TWSIMAGES/Portfolio/4.jpeg';
import Image5 from './TWSIMAGES/Portfolio/6.png';
import Image6 from './TWSIMAGES/Portfolio/7.jpg';
import Image7 from './TWSIMAGES/Portfolio/07.jpg';
import Image8 from './TWSIMAGES/Portfolio/8.jpg';
import Image9 from './TWSIMAGES/Portfolio/9.jpg';
import Image10 from './TWSIMAGES/Portfolio/10.jpg';
import Image11 from './TWSIMAGES/Portfolio/11.jpg';
import Image12 from './TWSIMAGES/Portfolio/12.jpg';
import Image13 from './TWSIMAGES/Portfolio/13.png';
import Image14 from './TWSIMAGES/Portfolio/14.jpg';
import Image15 from './TWSIMAGES/Portfolio/15.png';
import Image16 from './TWSIMAGES/Portfolio/16.jpg';
import Image17 from './TWSIMAGES/Portfolio/17.jpg';
import Feactures from "./Feactures";
function Portfolio() {
  const settings = {
    padding:"0 10px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  const style1 = {
    display: "flex",
    justifyContent: "center",
    fontSize: "45px",
    fontWeight: "bolder",
    textTransform: "uppercase",
    marginBottom: "20px",
    paddingtop:"80px"
  };
  const tws = {
    color: "#011627",
    fontFamily: "Inter, sans-serif",
    fontSize: "45px",
    fontWeight: "bolder",
    marginBottom: "25px",
  };
  const style2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    fontSize: "14px",
    margin: "0px",
    fontWeight: "bolder",
    width: "220px",
  };
  
    const imageStyle = {
      width: "240px",
      height: "170px",
      backgroundColor:"white"
      };
  return (
    <div>
      <h1 style={style1}> Our Portfolio</h1>
      {/* //first line */}
      <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="image 1" style={imageStyle} />
          <p style={style2}>Granite Gold</p>
        </div>
        <div>
          <img src={Image2} alt="image 2"style={imageStyle} />
          <p style={style2}>Yacht Registration</p>
        </div>
        <div>
          <img src={Image3} alt="image 3" style={imageStyle}/>
          <p style={style2}>Centropix</p>
        </div>
        <div>
          <img src={Image4} alt="image 4" style={imageStyle}/>
          <p style={style2}>Pixie Mood</p>
        </div>
        <div>
          <img src={Image5} alt="image 5"style={imageStyle} />
          <p style={style2}>Ipoc</p>
        </div>
        <div>
          <img src={Image6} alt="image 6" style={imageStyle}/>
          <p style={style2}>Igniteful</p>
        </div>
        <div>
          <img src={Image7} alt="image 7" style={imageStyle}/>
          <p style={style2}>Everynook</p>
        </div>
        <div>
          <img src={Image8} alt="image 8" style={imageStyle}/>
          <p style={style2}>OPP</p>
        </div>
        <div>
          <img src={Image9} alt="image 9"style={imageStyle} />
          <p style={style2}>Staerk and Christensen</p>
        </div>
        <div>
          <img src={Image10} alt="image 10" style={imageStyle}/>
          <p style={style2}>House of Horlow</p>
        </div>
        <div>
          <img src={Image11} alt="image 11" style={imageStyle}/>
          <p style={style2}>Autumn Adeigbo</p>
        </div>
        <div>
          <img src={Image12} alt="image 12" style={imageStyle}/>
          <p style={style2}>Mishael Saiger</p>
        </div>
        <div>
          <img src={Image13} alt="image 13" style={imageStyle}/>
          <p style={style2}>Humanist Beauty</p>
        </div>
        <div>
          <img src={Image14} alt="image 14" style={imageStyle}/>
          <p style={style2}>The Dental Express</p>
        </div>
        <div>
          <img src={Image15} alt="image 15" style={imageStyle}/>
          <p style={style2}>Kmarov</p>
        </div>
        <div>
          <img src={Image16} alt="image 16" style={imageStyle}/>
          <p style={style2}>Belan</p>
        </div>
        <div>
          <img src={Image17} alt="image 17" style={imageStyle}/>
          <p style={style2}>Fast Track</p>
        </div>
      </Slider>
    </div>
      <div style={{marginTop: "100px", marginBottom:"100px", padding: "50px 50px"}}>
        <div className="row">
          {/* Right side image */}
          <div className="col-md-6 d-flex justify-content-start align-items-center
           mb-5 order-md-2 mb-md-0">
            <div className="right-container ">
              <img
                src={agile}
                alt="random pic"
                style={{ width: "600px", height: "400px" }}
              />
            </div>
          </div>
          <div className="col-md-6 order-md-1 mb-4">
          {/* // justify-content-start align-items-center  */}
            <div className="left-container">
              <h1 style={tws}>TWS IN ACTION </h1>
              <h4
                style={{
                  fontSize: "15px",
                  marginBottom: "25px",
                  fontWeight: "lighter",
                  color: "#585555",
                  lineHeight: "2",
                  fontFamily: "Inter, Sans-serif",
                }}
              >
                We adopt a versatile approach in structuring apps, software and
                websites
                <br />
                with zero bug code, less server resources consumption and
                reduced server
                <br />
                cost. Together with our visionary team and the valued client
                input, we craft
                <br />
                the product best suited for our customers.
              </h4>
              <button
                className="btn btn-primary"
                style={{
                  padding:"7px",
                  marginTop: "11px",
                  width: "150px",
                  fontSize: "20px",
                  borderRadius: "30px",
                  background: "#3f7ec5",
                }}
                type="submit"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
      <Feactures/>
    </div>
  );
}

export default Portfolio;
