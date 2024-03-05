import React from "react";
import Frame from "./TWSIMAGES/logo/Frame.png";
import Homenavwhyus from "./Homenavwhyus";

function Homenav() {
  const tws = {
    color: "#007EC5",
    fontFamily: "Inter, sans-serif",
    fontSize: "45px",
    fontWeight: "900",
    marginBottom: "25px",
  };
  return (
    <div style={{ marginTop: "50px", marginBottom:"100px" , padding: "12px 15px" }}>
      <div className="row">
        {/* Right side image */}
        <div className="col-md-7 d-flex justify-content-
         align-items-center mb-5 order-md-2 mb-md-0">
          <div className="right-container">
            <img
              src={Frame}
              alt="random pic"
              style={{ width: "700px", height: "400px" }}
            />
          </div>
        </div>

        {/* Left side text */}
        <div className="col-md-5 order-md-1 d-flex align-items-center mb-4">
          <div className="left-container">
            <h1 style={tws}>One Step Soluction For All IT Services </h1>
            <p style={{ fontSize: "17px",lineHeight:"1.9", marginBottom: "25px",fontWeight:"500",color:"#585555" ,fontFamily: "Inter, Sans-serif"  }}>
              TWS presents you with customized software solutions, 
              <br/>
              consultancy and IT services to bring the best out of your
              <br/>
              business. Our teams do all this while promoting simplicity, 
              <br/>
              speed & reliability.
              </p>
              <button className="btn btn-primary" 
              style={{paddingTop:"14px",paddingBottom:"14px",paddingLeft:"30px",
              paddingRight:"30px", marginTop:"11px", width:"170px",fontSize:"20px", 
               borderRadius:"30px", background:"#3f7ec5" }} type="submit">
                Get in Touch
              </button>
          </div>
        </div>
      </div>
      <Homenavwhyus/>
    </div>
  );
}

export default Homenav;
