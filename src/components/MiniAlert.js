import React, { useEffect } from "react";
import { MdOutlineDoneOutline } from "react-icons/md";

const MiniAlert = ({ setCopy }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopy(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });

  return (
    <div className="mini-alert">
      <MdOutlineDoneOutline />
      <p>succesfully copied on clipboard!</p>
    </div>
  );
};

export default MiniAlert;
