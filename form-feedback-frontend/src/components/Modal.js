import React from "react";

function Modal({ show, onClose }) {
  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="check">
          <i className="far fa-check-circle"></i>
        </div>

        <div className="success-box">
          <h2>Great!</h2>
          <p>The form was submitted</p>
        </div>
        <div className="modal-bttn-container">
          <button className="modal-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
