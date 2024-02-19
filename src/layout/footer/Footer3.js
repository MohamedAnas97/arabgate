import Link from "next/link";

const Footer3 = () => {
  return (
    <footer
      className="main-footer footer-three rel bgs-cover z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape-two.png)",
      }}
    >
      <div className="container container-1290">
        <div className="footer-top-two pt-45 pb-30">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer-logo mb-20 wow fadeInRight delay-0-2s">
                <Link legacyBehavior href="/">
                  <a>
                    <img src="assets/images/arab/tech-2.png" alt="Logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 text-lg-end">
              <div className="social-style-four mb-20 wow fadeInLeft delay-0-2s">
                <a  href="https://www.facebook.com/"
              target="_blank"><i className="fab fa-facebook-f" />Facebook</a>
                <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" />Instagram</a>
                <a href="https://www.linkedin.com/"
              target="_blank"><i className="fab fa-youtube" />Youtube</a>
                <a  href="https://www.tiktok.com/"
              target="_blank"><i className="fab fa-tiktok" />TikTok</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6 col-12 ">
            <div className="footer-widget footer-text wow fadeInUp delay-0-2s">
              <h5 className="footer-title">Get In Touch</h5>
              <div className="">
                <div className="d-flex ">
                  <p className="foot-ml">
                    <i className="far fa-map-marker-alt" />
                  </p>
                  <p>
                    ARAB GATE Technical Services LLC, B Block 104, Al Shaali
                    Building, Damascus Street, Al Qusais
                  </p>
                </div>
                <div className="d-flex ">
                  <p className="foot-ml">
                    <i className="far fa-envelope" />
                  </p>
                  <p>
                    <a href="mailto:support@gmail.com">agarabgate@gmail.com</a>
                  </p>
                </div>
                <div className="d-flex ">
                  <p className="foot-ml">
                    <i className="far fa-phone-alt" />
                  </p>
                  <a href="callto:+000(123)45688">+971 585443090 </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3 col-5 col-small">
            <div className="footer-widget footer-links wow fadeInUp delay-0-4s">
              <h5 className="footer-title">Menu</h5>
              <div className="footer-widget widget_nav_menu">
                <ul className="list-style-two">
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/contact">
                      <a>Career ?</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/faqs">
                      <a>FAQs</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="col-lg-6">
            <div className="footer-widget newsletter-widget wow fadeInUp delay-0-6s">
              <h5 className="footer-title">Subscribe To Our Newsletter
</h5>
              <form className="footer-newsletter" action="#">
                <input type="email" placeholder="Email Address" required />
                <button type="submit">
                  <i className="fas fa-arrow-right" />
                </button>
              </form>
              {/* <div className="policy">
                <input id="privacy-policy" type="checkbox" />
                <label htmlFor="privacy-policy">
                  I agree to the{" "}
                  <Link legacyBehavior href="/about">
                    <a>Privacy Policy</a>
                  </Link>
                </label>
              </div> */}
            </div>
          </div>
        </div>
        <div className="copyright-area text-center  pb-20 wow fadeInUp delay-0-2s">
          <p>
            Copyright @2024 {" "}
            <Link legacyBehavior href="/">
              <a>Arab Gate</a>
            </Link>{" "}
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer3;
