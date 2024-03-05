import React from "react";
import "./Feactures.css";
import { FaUsers } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import Ourclients from "./Ourclients";

function Feactures() {
  return (
    <div style={{ backgroundColor: "#F9F9F9", padding: "50px 0px" }}>
      <div>
        <h1
          style={{
            fontSize: "50px",
            fontFamily: "inter, Sans-serif",
            textAlign: "center",
            paddingTop: "10px",
            paddingBottom: "20px",
            fontWeight: "bolder",
          }}
        >
          Our Features
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "17.5px",
            color: "#656565",
            fontFamily: "inter, Sans-serif",
            paddingBottom: "40px",
          }}
        >
          Our team of developers transforms designs into rich, interactive
          websites and applications that are easy for visitors to use and easy
          for clients to
          <br />
          maintain.
        </p>
      </div>
      <div className="flex-container">
        <div className="flex-item-left">
          <span style={{ display: "flex", marginRight: "10px" }}>
            {" "}
            <FaAppStore style={{ fontSize: "36px", color: "#9EF2B8" }} />
            <span style={{ paddingLeft: "12px", fontWeight: "bolder" }}>
              <h3 style={{ fontWeight: "bolder" }}>zero Configuration</h3>
            </span>
          </span>
          <p style={{paddingLeft:"45px",paddingTop:"15px",fontFamily:"inter Sans-serif",fontWeight: "lighter" ,color:"#7b7b7b" }}>
            You can focus on your business, knowing we will handle all your{" "}
            <br />
            IT needs. We know your business is unique and treat it that way.
          </p>
        </div>
        <div className="flex-item-right">
          <span style={{ display: "flex", marginRight: "10px" }}>
            {" "}
            <FaCode style={{ fontSize: "36px", color: "#F4B7DC" }} />
            <span style={{ paddingLeft: "12px", fontWeight: "bolder" }}>
              <h3 style={{ fontWeight: "bolder" }}>Code security</h3>
            </span>
          </span>
          <p style={{ paddingLeft: "45px", paddingTop: "15px" ,fontWeight: "lighter" ,color:"#7b7b7b"}}>
            To protect the enterprise, we perform detailed software code <br />
            security analysis when developing Websites or applications.<br />
            TWS can find and fix a software vulnerability before it can be<br />
            exploited for malicious purposes.
          </p>
        </div>
        <div className="flex-item-left">
          <span style={{ display: "flex", marginRight: "10px" }}>
            <FaUsers style={{ fontSize: "36px", color: "#DEAAF2" }} />
            <span style={{ paddingLeft: "12px", fontWeight: "bolder" }}>
              <h3 style={{ fontWeight: "bolder" }}>Team Management</h3>
            </span>
          </span>
          <p style={{ paddingLeft: "45px", paddingTop: "15px" ,fontWeight: "lighter" ,color:"#7b7b7b" }}>
            It’s very essential for the company that is why we are<br/>
            Maintaining good communication, build positive working<br/>
            relationships, acknowledge good work delegate jobs to the right<br/>
            people and setting a good example team always will look to you <br/>
            for guidance and inspiration.
          </p>
        </div>
        <div className="flex-item-right">
          <span  style={{ display: "flex", marginRight: "10px" }}>
            <FaBell style={{ fontSize: "36px", color: "#F8AA8E" }} />
         <span style={{ paddingLeft: "12px", fontWeight: "bolder" }}>
          <h3 style={{ fontWeight: "bolder" }}>Deadline Reminder</h3>
         </span>
          </span>
          <p style={{ paddingLeft: "45px", paddingTop: "15px",fontWeight: "lighter" ,color:"#7b7b7b" }}>
            After 2 years and Hundreds of web design and development<br/>
             projects,we are proud of our reputation for client service and <br/>
            success.We are devoted to listening, planning and managing<br/>
            projects flawlessly.Get to know the talented people behind it<br/>
            all.
          </p>
        </div>
      </div>
      <Ourclients/>
    </div>
  );
}

export default Feactures;
