import React from "react";
import { useLocation,useNavigate } from "react-router-dom";

export default function Machine() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  return (
    <div style={{display:"flex"}}>
      <button style={{cursor:"pointer"}} autoFocus="true" onClick={()=>{
        navigate("/");
      }}>
        Predicted Particle = <u>{location.state}</u>
      </button>
    </div>
  );
}
