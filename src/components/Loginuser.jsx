import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Loginuser() {
  return (
    <>
    <Sidebar/>
    <h2 className="loginform">Munish Login Successfully</h2>
    {/* <button className="btn-2">Logout</button> */}

    <Link to="/Login">
      <button className="btn-2">
        Logout
      </button>
    </Link>
    </>
  )
};

export default Loginuser