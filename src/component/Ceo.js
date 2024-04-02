import React from "react";
import Adeelbhai from "./TWSIMAGES/Adeelbhai.jpeg";
import Team from "./Team";
import { FaLinkedin } from "react-icons/fa";

function Ceo() {
  const tws = {
    color: "#011627",
    fontFamily: "Inter, sans-serif",
    fontSize: "45px",
    fontWeight: "500",
    marginBottom: "26px",
  };
  return (
    <section className="container-fluid">
      <div className="row">
        {/* Right side image */}
        <div className="col-md-6 align-items-center mb-4 order-md-2 mb-md-0"
         style={{padding:"100px 0px 30px 0px"}}>
          <div className="right-container1">
            <h1 style={tws}>Message From CEO</h1>
            <p style={{ fontSize: "21px", marginBottom: "26px" }}>
              Create a vision for the life you really want and then work relentlessly <br/>
              towards making it a reality.”
            </p>
            <p style={{ fontSize: "21px", marginBottom: "26px" }}>
              When I started TWS, I had one goal, to establish it as the top
              software house <br/> of Pakistan. The journey was and is not easy but we
              are heading towards <br/> achieving all our goals one step at a time. My
              vision has not changed, it has <br/> multiplied into achieving more for
              the company, my employees and the <br/> clients that I work with. With
              TWS, I aim to help companies that are making <br/>
              a difference in their respective fields. We nourish new talent and set new <br/> standards of
              excellence by reclaiming our power and position in the world.<br/>
              Through the undertaking of this process we can break free from the
              past and <br/> enter the future with a new and better purpose.
            </p>
            <p  style={{ fontSize: "21px", marginBottom: "25px" }}>
              The world is transforming every second, and I believe that we as a
              nation <br/> should master the art of digitization and
              self-entrepreneurship because that <br/> is how we can put Pakistan on
              the map. I have taken it upon myself to further <br/> Pakistan’s role in
              the global movement of transformational tech.Therefore we
              will keep on moving forward with sheer hard work, determination and <br/>
              perseverance, and only then can we realize all our dreams!
            </p>
            <div>
                <div>
          <div style={{ textAlign: "center", padding: "15px 0 60px" }}>
            <h4 style={{fontFamily:"Open Sans,sans-serif",color:"#3e4a59"}}>Muhammad Adeel</h4>
            <h5 style={{fontWeight:"500", color:"#9b9292",fontSize:"15px",
            fontFamily:'Open Sans,sans-serif'}}>Founder & CEO</h5>
            <a href="https://www.linkedin.com/in/muhammad-adeel-863828108/"
              aria-label="Linkedin" target="_blank" rel="noreferrer" >
              <FaLinkedin
                style={{
                  width: "20px",
                  fontSize: "20px",
                  backgroundColor: "transparent",
                }}
              />
            </a>
          </div>
        </div>
            </div>
          </div>
        </div>

        {/* Left side text */}
        <div className="col-md-6 order-md-1 align-items-center">
          <div className="left-container1">
            <img
              src={Adeelbhai} 
              alt=""
              style={{ width: "440px", height: "420px",  borderRadius:"220px"}}
            />
           
          </div>
        </div>
      </div>
      <Team/>
    </section>
  );
}

export default Ceo;
