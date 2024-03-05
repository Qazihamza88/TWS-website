import React from 'react'
import AFLAG from './TWSIMAGES/logo/AFLAG.png'
import PFlag from './TWSIMAGES/logo/PFlag.png'
import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import {FaStar} from  "react-icons/fa";

function Footer() {
  const h3style = {
    color: "#007ec5",
    fontSize: "40px",
    fontWeight: "bolder",
    marginBottom: "25px"
  }
  const h4style = {
    color: "#007ec5",
    fontSize: "40px",
    fontWeight: "bolder",
    alignItem: "center",
    marginBottom: "25px"
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className='container'>
              <div className='footerflag'>
                <li style={{ textAlign: "start" }}>
                  <img src={AFLAG} alt='flag' style={{ width: "30px", height: "25px" }} />
                </li>
                <span style={{ fontSize: "19px" }}><a href="info@thewebstorms.com" style={{ color: "#000000", textDecoration: "none" }}>
                  <FaMapMarker style={{ color: "#6ec1e4 ", paddingRight: "10px", width: "30px" }} />
                  42 Broadway Unit# 12 New York 10004,USA </a></span>
                <br />
                <FaEnvelope style={{ color: "#6ec1e4", paddingRight: "10px", width: "30px" }} />
                <span style={{ fontSize: "19px" }}>
                  <a href='/' style={{ color: "#000000", fontFamily: "inter ,sans-serif", textDecoration: "none" }}> info@thewebstorms.com</a>
                </span>
                <br />
                <FaPhone style={{ color: "#6ec1e4", paddingRight: "10px", width: "30px" }} />
                <span style={{ fontSize: "22px" }}><a href='/' style={{ color: "#000000", textDecoration: "none" }}> +1518-992-3745 </a></span>
                <div>
                  <li style={{ textAlign: "start" }}>
                    <img src={PFlag} alt='flag' style={{ width: "30px", height: "65px", paddingTop: "40px" }} />
                  </li>
                  <span style={{ fontSize: "19px" }}><a href="info@thewebstorms.com" style={{ color: "#000000", textDecoration: "none" }}>
                    <FaMapMarker style={{ color: "#6ec1e4 ", paddingRight: "10px", width: "30px" }} />
                    38-Z Block Phase 3 DHA Lahore </a></span>
                  <br />
                  <FaEnvelope style={{ color: "#6ec1e4", paddingRight: "10px", width: "30px" }} />
                  <span style={{ fontSize: "19px" }}>
                    <a href='/' style={{ color: "#000000", fontFamily: "inter ,sans-serif", textDecoration: "none" }}> info@thewebstorms.com</a>
                  </span>
                  <br />
                  <FaPhone style={{ color: "#6ec1e4", paddingRight: "10px", width: "30px" }} />
                  <span style={{ fontSize: "22px" }}><a href='/' style={{ color: "#000000", textDecoration: "none" }}> +923262197546</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h3 style={h3style}>Services </h3>
            <div className="start">
            <li style={{ fontSize: "25px" }}>
              <a className="nav-link " aria-current="page" href="#">
                How we roll
              </a>
            </li>
            <li style={{ fontSize: "25px" }}>
              <a className="nav-link " href="/">
                Services
              </a>
            </li>
            <li style={{ fontSize: "25px" }}>
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
            {/* <li style={{ fontSize: "25px" }}>
              <a className="nav-link" href="/">
                Project
              </a>
            </li> */}
            <li style={{ fontSize: "25px" }}>
              <a className="nav-link" href="/">
                Our team
              </a>
            </li>
            </div>
          </div>
          <div className="col-md-3">
          <h3 style={h4style}>Reviews </h3>
          <div className="review">
   <div className="review-box">
    <div className="text-box">
      <p>Reviewed On</p>
    </div>
    <div className="star-box">
        <a href='https://clutch.co/profile/tws?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=stars&utm_term=thewebstorms.com#highlights'>
        <FaStar style={{color:"#e62415"}}/><FaStar style={{color:"#e62415"}}/><FaStar style={{color:"#e62415"}}/><FaStar style={{color:"#e62415"}}/><FaStar style={{color:"#e62415"}}/>
        </a>
    </div>
    <div className="website-box">
      <a href="https://clutch.co/profile/tws?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=logo&utm_term=thewebstorms.com#highlights"><h2 style={{fontWeight:"bold"}}>Clutch </h2> </a>
    </div>
    <div className="review-count-box">
      <a href="https://clutch.co/profile/tws?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=num_reviews&utm_term=thewebstorms.com#reviews"><h6 style={{paddingTop:"13px"}}>4 REVIEWS</h6></a>
    </div>
  </div>
  </div>
         </div>
          <div className="col-md-2">

            <h3 style={h3style}>Find Us</h3>
            <div style={{ backgroundColor: "blur", paddingLeft: "5px" }}>

              <a href="https://www.facebook.com/twebiestorms" aria-label="Facebook">
                <FaFacebook style={{ width: "40px", fontSize: "40px", color: "blur" }} /></a>
              <a href="https://www.linkedin.com/company/52147635/admin/" aria-label="Linkedin">
                <FaLinkedin style={{ width: "40px", fontSize: "40px" }} /></a>
              <a href="https://www.instagram.com/thewebstorms/?igshid=YmMyMTA2M2Y%3D" aria-label="Instagram">
                <FaInstagram style={{ width: "40px", fontSize: "40px" }} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
