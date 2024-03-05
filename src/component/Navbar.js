import React from "react";
import thewebstorm from './TWSIMAGES/logo/thewebstorm.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const listyle = {
    color: "#585555",
    fontWeight: "bold",
    fontSize: "20px",
    fontFamily: "Montserrat, sans-serif",
    paddingTop: "10px"
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ padding: "10px 35px" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={thewebstorm} width="auto" height={"70"} marginTop={"10px"} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll px-3 " style={listyle}>
              <li className="nav-item px-3 ">
                <Link className="nav-link " aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item px-3 ">
                <Link className="nav-link " to="/">
                  Services
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item px-3 ">
                <Link className="nav-link " to="/team">
                  Team
                </Link>
              </li>
              {/* Add other links here */}
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-primary"
                style={{ paddingTop: "14px", paddingBottom: "14px", paddingLeft: "30px", paddingRight: "30px", marginTop: "11px", width: "175px", fontSize: "20px", borderRadius: "30px", background: "#3f7ec5" }} type="submit">
                Get in Touch
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
