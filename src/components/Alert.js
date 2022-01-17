import React, { useEffect } from "react";
import "../css/alert.css";
import { FaTimes } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Alert = ({ msg, type, setAlertHook }) => {
  document.body.style.overflow = "hidden";
  const removeAlert = () => {
    document.body.style.overflow = "auto";
    setAlertHook();
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.body.style.overflow = "auto";
      removeAlert();
    }, 4000);
    return () => clearTimeout(timeout);
  });
  return (
    <div className="alert" onClick={() => removeAlert()}>
      <div className="alert-container">
        <button className="close-alert" onClick={() => removeAlert()}>
          <FaTimes />
        </button>
        <div className={`alert-icon alert-icon-${type}`}>
          {type === "danger" ? <ImCancelCircle /> : <IoCheckmarkDoneCircle />}
        </div>
        <div className={`alert-message message-${type}`}>
          <span>{msg}</span>
        </div>
      </div>
    </div>
  );
};

export default Alert;
