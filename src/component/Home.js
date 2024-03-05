import React from 'react';
import team from './TWSIMAGES/logo/team.png';
import Ceo from './Ceo';

function Home() {
  const tws = {
    color: "#007EC5",
    fontFamily: "Inter, sans-serif",
    fontSize: "45px",
    fontWeight: "900",
    marginBottom: "25px"
  };
  return (
    <div style={{ marginTop: "10px", padding: "20px 20px" }}>
      <div className="row">
        {/* Right side image */}
        <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 order-md-2 mb-md-0">
          <div className="right-container">
            <img src={team} alt="random pic" style={{ width: "350px", height: "276px" }} />
          </div>
        </div>

        {/* Left side text */}
        <div className="col-md-6 order-md-1 d-flex align-items-center">
          <div className="left-container">
            <h1 style={tws}>Discover Life At TWS</h1>
            <p style={{ fontSize: "21px", marginBottom: "30px" }}>
              We pride ourselves in building teams that know how to have
              <br />
              fun – inside and outside the office
            </p>
          </div>
        </div>
      </div>
      <Ceo/>
    </div>
  );
}

export default Home;
