const CallButton = ({ phoneNumber }) => {
  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "12px",
        bottom: "70px",
        zIndex: 20,
        cursor: "pointer",
      }}
      onClick={handleClick}
      className="animate"
    >
      <img
        src="/assets/images/arab/phone-call.png"
        alt=""
        style={{ height: "46px" }}
      />
    </div>
  );
};

export default CallButton;
