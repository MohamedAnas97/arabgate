const CallButton = ({ phoneNumber }) => {
  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div style={{
        position: "fixed",
        right: "10px",
        bottom: "60px",
        zIndex: 20,
      }} onClick={handleClick} >
      <img
        src="/assets/images/arab2/whatsapp.png"
        alt=""
        style={{ height: "50px" }}
      />
    </div>
  );
};

export default CallButton;
