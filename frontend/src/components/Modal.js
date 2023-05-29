import React from "react";
import "./Modal.css";

import { Link } from "react-router-dom";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
            <Link to="/Home">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button></Link>
        </div>
        <div className="title">
          <h1>Your Company has been Registered</h1>
        </div>
        <div className="footer">
         <Link to="/Home"><button>Okay</button></Link> 
        </div>
      </div>
    </div>
  );
}

export default Modal;