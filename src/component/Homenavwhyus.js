import React from "react";
import NavDetails from "./NavDetails";

function Homenavwhyus() {
    const style1={
        display:"flex",
        justifyContent:"center",
        fontSize:"45px",
        fontWeight:"bolder",
        textTransform:"uppercase",
        marginBottom:"20px"
    }
    const style2={
        display:"flex",
        justifyContent:"space-evenly",
        fontSize:"20px",
        color:"#585555",
        fontWeight:"lighter",
        textAlign:"center"
    }
  return (
      <div style={{width:"auto",height:"auto",paddingTop:"100px",paddingBottom:"100px" }}>
        <h1 style={style1}> Why Us </h1>
        <hr style={{width:"100px",margin:"auto" ,paddingBottom:"50px"}}></hr>
        <p className="style3" style={{textAlign:"center",
         display:"flex",justifyContent:"center", color:"#585555", }}>
          TWS is a software development agency that specializes in all IT
          platforms and operations to optimize your business.<br/>
          Our teams are trained in both internal and external system maintenance with
          extensive experience in managing <br/>
          complex software problems by employing various infrastructure management tools
        </p>
        <NavDetails/>
      </div>
     );
}

export default Homenavwhyus;
