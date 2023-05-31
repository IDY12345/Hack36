import React from "react";
import "./Modal.css";

import { Link } from "react-router-dom";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground1">
      <div className="modalContainer1">
        <div className="titleCloseBtn1">
            <Link to="/Home">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button></Link>
        </div>
        <div className="title1">
          <h2 className="title1-Your">Your Company has been Registered</h2>
        </div>
        <div className="footer1">
         <Link to="/Home"><button>Okay</button></Link> 
        </div>
      </div>
    </div>
  );
}

export default Modal;