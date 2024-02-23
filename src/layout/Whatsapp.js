const Whatsapp = () => {
  return (
    <div
      style={{
        position: "fixed",
        right: "10px",
        bottom: "10px",
        zIndex: 20,
      }}
      className="animate"
    >
      <a
        href="https://api.whatsapp.com/send?phone=971527690405&text="
        target="_blank"
      >
        <img
          src="/assets/images/arab2/whatsapp.png"
          alt=""
          style={{ height: "50px" }}
        />
      </a>
    </div>
  );
};
export default Whatsapp;
