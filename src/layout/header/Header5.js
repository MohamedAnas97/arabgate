import Link from "next/link";
import Nav from "./Nav";
import NavSearch from "./NavSearch";

const Header5 = ({ singleMenu }) => {
  return (
    <header className="main-header menu-absolute header-two">
      <div className="header-top">
        <div className="container container-1620">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <ul className="top-left">
                <li>
                  <i className="far fa-phone-alt" /> +971 585443090
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="top-right">
                
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-tiktok" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1620 clearfix">
          <div className="header-inner rpy-10 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src="assets/images/arab/tech-2.png"
                      alt="Logo"
                      title="Logo"
                      className="main-logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <Nav singleMenu={singleMenu} />
              {/* Main Menu End*/}
            </div>
            {/* <div className="call-anytime">
              <div className="icon">
                <i className="fas fa-phone-alt" />
              </div>
              <div className="content">
                <span>Call Anytime</span>
                <a href="callto:985236425288">+971 585443090</a>
              </div>
            </div> */}
            {/* Nav Search */}
            {/* <NavSearch /> */}
            {/* Menu Button */}
            <div className="menu-btns">
              {/* menu sidbar */}
              <div className="menu-sidebar">
                <button>
                  <img
                    src="assets/images/arab/chat.png"
                    alt="Toggler"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default Header5;
