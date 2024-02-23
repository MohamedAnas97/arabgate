import React, { useState, useEffect } from 'react';

const CallButton = ({ phoneNumber }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(!showText);
    }, 3000); // Toggle text every 10 seconds

    return () => clearTimeout(timer);
  }, [showText]);

  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "7px",
        bottom: "70px",
        zIndex: 20,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={handleClick}
      className="animate"
    >
      <span className={showText ? "call-now-text visible" : "call-now-text"}>Call Now</span>
      <img
        src="/assets/images/arab/phone-call.png"
        alt="Phone Icon"
        className="phone-icon"
      />
    </div>
  );
};

export default CallButton;
