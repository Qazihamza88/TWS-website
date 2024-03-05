import React from "react";
import Frame from "./TWSIMAGES/Servicesimg/dimg.png";
import Ser2 from "./TWSIMAGES/Servicesimg/Caseimage.png";
import Ser3 from "./TWSIMAGES/Servicesimg/Caseimage(1).png";
import Ser4 from "./TWSIMAGES/Servicesimg/Caseimage(2).png";

function Services() {
  const tws = {
    color: "#007EC5",
    fontFamily: "Inter, sans-serif",
    fontSize: "45px",
    fontWeight: "900",
    marginBottom: "25px",
  };
  const headerStyle = {
    marginTop:"40px",
    fontFamily: "Inter, sans-serif",
    backgroundColor: "#3498db", // Background color
    width: "100%", // Full width
    height: "90px", // Height
    display: "flex", // Center text vertically
    justifyContent: "center", // Center text horizontally
    alignItems: "center", // Center text vertically
    color: "white", // Text color
  };
  return (
    <div
      style={{ marginTop: "50px", marginBottom: "100px", padding: "12px 15px" }}
    >
      <div className="row">
        {/* Right side image */}
        <div
          className="col-md-7 d-flex justify-content-
       align-items-center mb-5 order-md-2 mb-md-0"
        >
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
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.9",
                marginBottom: "25px",
                fontWeight: "500",
                color: "#585555",
                fontFamily: "Inter, Sans-serif",
              }}
            >
              TWS presents you with customized software solutions,
              <br />
              consultancy and IT services to bring the best out of your
              <br />
              business. Our teams do all this while promoting simplicity,
              <br />
              speed & reliability.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div style={headerStyle}>
            <h1>The Apps We Created</h1>
          </div>
          <div
            className="services"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="service" style={{ marginTop: "20px" }}>
              <div className="service-content" style={{ textAlign: "center" }}>
                <img
                  src={Ser2}
                  alt="Meditation"
                  className="service-image"
                  style={{ display: "block", margin: "0 auto" }}
                />
                <div
                  className="service-details"
                  style={{ textAlign: "center" }}
                >
                  <h1
                    style={{
                      margin: "15px 0",
                      paddingTop: "30px",
                      paddingBottom: "20px",
                      fontWeight: "bolder",
                      backgroundColor: "#d0d0d091",
                    }}
                  >
                    FireFit Athlete{" "}
                  </h1>
                  <p
                    style={{
                      margin: "10px 25px",
                      fontSize: "22px",
                      fontFamily: "Inter, Sans-serif",
                    }}
                  >
                    "FireFit is a revolutionary fitness app designed to ignite
                    your passion for exercise and track your daily activities
                    effortlessly. With FireFit, you can log your running
                    distance and calories burned, empowering you to stay
                    motivated and reach your fitness goals. Whether you're a
                    seasoned athlete or just starting your fitness journey,
                    FireFit provides the tools you need to stay on track and
                    live a healthier, more active lifestyle. Join the FireFit
                    community today and unleash your full potential Seamlessly
                    track your daily miles and calories burned, empowering you
                    to surpass your personal bests. With comprehensive weekly
                    and monthly insights, FireFit provides invaluable data to
                    fine-tune your training regimen and achieve peak performance
                    Join the FireFit community today, where every step is a
                    stride toward greatness." "
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div
          className="services"
          style={{ display: "flex", justifyContent: "center"  ,paddingTop:"30px"}}
        >
          <div className="service" style={{ marginTop: "20px" }}>
            <div className="service-content" style={{ textAlign: "center" }}>
              <img
                src={Ser3}
                alt="Meditation"
                className="service-image"
                style={{ display: "block", margin: "0 auto" }}
              />
              <div className="service-details" style={{ textAlign: "center" }}>
                <h1
                  style={{
                    margin: "15px 0",
                    paddingTop: "30px",
                    paddingBottom: "20px",
                    fontWeight: "bolder",
                    backgroundColor: "#d0d0d091",
                  }}
                >
                  Own Goals
                </h1>
                <p
                  style={{
                    margin: "10px 0",
                    fontSize: "22px",
                    fontFamily: "Inter, Sans-serif",
                  }}
                >
                  <strong>Log In:</strong>Users can log in to access the
                  goal-setting features.
                  <br />
                  <strong>Set Your Goals:</strong> After logging in, users can
                  set their goals.Options include:
                  <br />
                  <li style={{ paddingTop: "30px" }}>Go for a walk</li>
                  <br />
                  <li>Read books</li>
                  <br />
                  <li>Cook dinner</li>
                  <br />
                  <li>Organize work </li>
                  <br />
                  <li>Do some exercises </li>
                  <br />
                  <strong>View Your Goals:</strong>
                  Users can see their goals listed after setting them.
                  <br />
                  <strong>Log Out:</strong> Users can log out to end their
                  session.
                  <br/>
                  This app encourages users to define and track their goals for
                  activities like walking, reading, cooking, organizing work,
                  <br/>
                  and exercising. It provides a simple interface for setting and
                  viewing goals, promoting productivity and well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div
        className="services"
        style={{ display: "flex", justifyContent: "center", paddingTop:"30px" }}
      >
        <div className="service" style={{ marginTop: "20px" }}>
          <div className="service-content" style={{ textAlign: "center" }}>
            <img
              src={Ser4}
              alt="Meditation"
              className="service-image"
              style={{ display: "block", margin: "0 auto" }}
            />
            <div className="service-details" style={{ textAlign: "center" }}>
              <h3
                style={{
                  margin: "15px 0",
                  paddingTop: "30px",
                  paddingBottom: "20px",
                  fontWeight: "bolder",
                  backgroundColor: "#d0d0d091",
                }}
              >
                Meditation Sessions
              </h3>
              <p
                style={{
                  margin: "10px 0",
                  fontSize: "22px",
                  fontFamily: "Inter, Sans-serif",
                }}
              >
                Meditation is a powerful practice that promotes mindfulness,
                reduces stress, and enhances overall well-being.
                <br /> With our meditation app, embark on a journey of
                self-discovery and inner peace. Access guided meditation sessions,
                <br /> calming music, and mindfulness exercises anytime,
                anywhere. Start your mindfulness journey today and 
                experience the
                <br/>
                transformative benefits of meditation. Cultivate a sense of
                clarity and focus, improve emotional regulation, and boost
                <br/>
                creativity and productivity. In addition to reducing stress and
                promoting relaxation, regular meditation practice has been shown
                <br/>
                to lower blood pressure, improve focus and attention span, and
                increase feelings of happiness and contentment. It can also aid
                <br/>
                in pain management, boost creativity, and strengthen
                relationships by fostering better communication and empathy.
                <br/>
                Embrace the serenity and vitality that meditation brings into
                your life, and unlock your full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Services;
