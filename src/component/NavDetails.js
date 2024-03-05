import React from "react";
import { FaLaptop } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {FaStreetView}   from "react-icons/fa";
import {FaDatabase} from "react-icons/fa";
import Portfolio from "./Portfolio";


 function NavDetails() {
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <div className="custom-container">
        <div className="row " style={{paddingBottom:"10px" ,paddingTop:"10px"}}>
          <div className="col-md-5">
            <div style={{ paddingTop: "100px" }}>
              <h1
                style={{
                  paddingTop: "15px",
                  paddingRight: "35px",
                  fontSize: "40px",
                  fontWeight: "bolder",
                }}
              >
                We do all the software heavy-lifting for you,which includes
              </h1>
            </div>
          </div>
          <div className="col-md-7">
            {/* Content for col-md-8 */}
            <div className="row">
              <div className="col-md-6 box">
                <span>
                  <FaLaptop
                    style={{ width: "45px", height: "50px", color: "#F0CBE1" }}
                  />
                </span>
                <span
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginLeft: "20px",
                    color: "#3535353",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  }}
                >
                  Software Development
                </span>
                <p
                  style={{
                    color: "#585555",
                    lineHeight: "2",
                    fontSize: "17px",
                    marginTop: "10px",
                  }}
                >
                  Our software development team takes
                  <br />
                  care of all the technological
                  <br />
                  fundamentals you need to start your
                  <br />
                  next great project
                </p>
              </div>
              <div className="col-md-6 box">
                <span>
                  <FaShoppingCart
                    style={{ width: "45px", height: "50px", color: "#A4E6F8" }}
                  />
                </span>
                <span
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginLeft: "20px",
                    color: "#3535353",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  }}
                >
                  Ecommerce
                </span>
                <p
                  style={{
                    color: "#585555",
                    lineHeight: "2",
                    fontSize: "17px",
                    marginTop: "10px",
                  }}
                >
                  Boost your online business through
                  <br />
                  customer friendly interface and <br />
                  interactive manuals.
                </p>
              </div>
              <div className="col-md-6 box">
                <span>
                  <FaStreetView
                    style={{ width: "45px", height: "50px", color: "#F0CBE1" }}
                  />
                </span>
                <span
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginLeft: "20px",
                    color: "#3535353",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  }}
                >
                  Dedicated Team
                </span>
                <p
                  style={{
                    color: "#585555",
                    lineHeight: "2",
                    fontSize: "17px",
                    marginTop: "10px",
                  }}
                >
                  Our teams specialize in all <br />
                  technological fields to provide <br />
                  versatility and innovation to your <br />
                  project that keep you at the top of your <br />
                  game.
                </p>
              </div>
              <div className="col-md-6 box">
                <span>
                  <FaDatabase
                    style={{ width: "35px", height: "50px", color: "#A4E6F8" }}
                  />
                </span>
                <span
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginLeft: "20px",
                    color: "#3535353",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  }}
                >
                  Web Designing
                </span>
                <p
                  style={{
                    color: "#585555",
                    lineHeight: "2",
                    fontSize: "17px",
                    marginTop: "10px",
                  }}
                >
                  Customized and efficient web development for all types of
                  startups, businesses and enterprises
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Portfolio/>
    </div>
  );
}

export default NavDetails;
