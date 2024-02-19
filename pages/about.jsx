import dynamic from "next/dynamic";
import ReactPlayer from "react-player";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const About = () => {
  const video =
    "https://public-general-s3-bucket-gng.s3.amazonaws.com/gng-homepage.mp4";
  return (
    <Layout>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-11">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                You’ve got an idea?
                <img
                  className="mxw-20"
                  src="assets/images/banner/inside-title1.png"
                  alt="title"
                />
                <img
                  className="mxw-40"
                  src="assets/images/banner/inside-title2.png"
                  alt="title"
                />
                We’ve got <br /> you!
                <span className="arrow">
                  <img
                    className="wow fadeInLeft delay-0-6s"
                    src="assets/images/hero/title-arrow.png"
                    alt="Arrow"
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Page Banner Section End */}
      {/* Video Area start */}
      <div className="video-area-two rel z-1">
        <div className="container-fluid">
          <div className="video-part style-two mb-40 wow fadeInUp delay-0-2s">
            {/* <img src="assets/images/video/video-two-bg.jpg" alt="Video" />
            <a
              href="https://res.cloudinary.com/dn1rcvm1v/video/upload/v1685003666/home_szzjqt.mp4"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a> */}
            <ReactPlayer
              url={video}
              controls={false}
              loop
              playing
              playsinline={true}
              muted={true}
              className="video-container"
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft delay-0-2s">
              <div className="client-text text-lg-start text-center mt-40 pb-50">
                Our mission is to translate your creative visions into reality
                with our model-tech solutions that revolutionise industries and
                leave an everlasting print on the digital world.
              </div>
              {/* <div className="row">
                <div className="col-xl-10">
                  <div className="client-logo-wrap">
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two1.png"
                          alt="Client Logo"
                        />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two2.png"
                          alt="Client Logo"
                        />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two3.png"
                          alt="Client Logo"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-lg-6 wow fadeInRight delay-0-2s">
              <div className="video-year text-lg-end text-center rel">
                2022
                <img
                  className="leaf-shape"
                  src="assets/images/video/leaf.png"
                  alt="Leaf"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Area end */}
      {/* Who We Are start */}
      <section className="who-we-are-area pt-100 rpt-80 pb-75 rpb-45 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Who We Are</span>
                <h2>A team of innovators thrilled to work with you </h2>
              </div>
            </div>
          </div>
          <div className="row gap-90 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-2s">
                <div className="why-choose-header">
                  <i className="flaticon-creativity" />
                  <h5>Optimise your website</h5>
                </div>
                <p>
                  Delving into your business ethos and essence, to curate a
                  brand that stands a part.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-4s">
                <div className="why-choose-header">
                  <i className="flaticon-software-development" />
                  <h5>Web and Mobile application development</h5>
                </div>
                <p>
                  Gripping designs that captivate users from the moment they lay
                  eyes on your app.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-6s">
                <div className="why-choose-header">
                  <i className="flaticon-ux" />
                  <h5>Avatar creation and Metaverse Consulting</h5>
                </div>
                <p>
                  Crafting & personalising details of your digital identity from
                  head to toe.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="why-choose-item style-two wow fadeInUp delay-0-6s ">
                <div className="why-choose-header">
                  <i className="flaticon-ai" />
                  <h5>Unlock the Future with Web 3.0 and AI Development</h5>
                </div>
                <p>
                  Next generation of the web, where intelligence meets
                  decentralisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Who We Are end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-40 pb-40">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Metaverse Development </b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Virtual Reality Experiences & Applications </b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Game Development </b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Smart Contracts & DApps </b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web 3.0 development </b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Cross-platform solutions </b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Avatar Creation & Customization </b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>UI/UX Prototyping and Design </b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>iOS and Android Mobile Application Development </b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Tailor made Solutions</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Branding & Website Optimization</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Marketing As A Service</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Team Area start */}
      <section className="team-area pt-130 rpt-100">
        <div className="container-fluid">
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-2s">
                <div className="image shelly-color">
                  <img src="assets/images/team/shel.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Sheley Grover</h4>
                  <span>CEO & Founder</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="btn-social d-flex justify-content-between">
                  <Link
                    legacyBehavior
                    href="https://www.linkedin.com/in/shelly-grover-prem-grover-a83310298/"
                  >
                    <a className="read-more" target="_blank">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    {/* <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a> */}
                    <a
                      href="https://www.linkedin.com/in/shelly-grover-prem-grover-a83310298/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-2s">
                <div className="image kenan-color">
                  <img src="assets/images/team/madhav1.png" alt="Team Member" />
                </div>
                <div className="content" style={{ opacity: "1" }}>
                  <h4>Madhav Grover </h4>
                  <span> Legal Consultant</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="btn-social d-flex justify-content-between">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col">
              <div className="team-member wow fadeInUp delay-0-3s">
                <div className="image benzy-color">
                  <img src="assets/images/team/benzy.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Benzy Aman</h4>
                  <span>Cheif Technology Officer</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="btn-social d-flex justify-content-between">
                  <Link
                    legacyBehavior
                    href="https://www.linkedin.com/in/benzy-aman-027a8812"
                  >
                    <a className="read-more" target="_blank">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    {/* <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a> */}
                    <a
                      href="https://www.linkedin.com/in/benzy-aman-027a8812"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-2s">
                <div className="image kenan-color">
                  <img src="assets/images/team/kenan.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Kenan Alzaidi</h4>
                  <span>Project Manager</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="btn-social d-flex justify-content-between">
                  <Link
                    legacyBehavior
                    href="https://www.linkedin.com/in/kinan-al-zaidy/"
                  >
                    <a className="read-more" target="_blank">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    {/* <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a> */}
                    <a
                      href="https://www.linkedin.com/in/kinan-al-zaidy/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="team-member wow fadeInUp delay-0-4s">
                <div className="image marium-color">
                  <img src="assets/images/team/marium.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Marium Babar Muhammad</h4>
                  <span>Head Of Innovations</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="btn-social d-flex justify-content-between">
                  <Link
                    legacyBehavior
                    href="https://www.linkedin.com/in/mariumb/"
                  >
                    <a className="read-more" target="_blank">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    {/* <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a> */}
                    <a
                      href="https://www.linkedin.com/in/mariumb/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-5s">
                <div className="image linto-color">
                  <img src="assets/images/team/linto.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Linto vattoly</h4>
                  <span>Game & Metaverse Developer</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="btn-social d-flex justify-content-between">
                  <Link
                    legacyBehavior
                    href="https://www.linkedin.com/in/linto-vattoly-20501b112"
                  >
                    <a className="read-more" target="_blank">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    {/* <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a> */}
                    <a
                      href="https://www.linkedin.com/in/linto-vattoly-20501b112"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-6s">
                <div className="image shoaib-color">
                  <img src="assets/images/team/shoaib.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Muhammad Shoaib</h4>
                  <span>Web Developer</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="btn-social d-flex justify-content-between">
                  <Link
                    legacyBehavior
                    href="https://www.linkedin.com/in/mohammad-shoaib-b671111b4/"
                  >
                    <a className="read-more" target="_blank">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    {/* <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a> */}
                    <a
                      href="https://www.linkedin.com/in/mohammad-shoaib-b671111b4/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-3s">
                <div className="image souhardha-color">
                  <img
                    src="assets/images/team/souharda.png"
                    alt="Team Member"
                  />
                </div>
                <div className="content">
                  <h4>Souharda Mukherjee</h4>
                  <span>UI/UX Manager</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="btn-social d-flex justify-content-between">
                  <Link
                    legacyBehavior
                    href="https://www.linkedin.com/in/souharda-mukherjee/"
                  >
                    <a className="read-more" target="_blank">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    {/* <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a> */}
                    <a
                      href="https://www.linkedin.com/in/souharda-mukherjee/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/team/sathi.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Sathiya Priyan</h4>
                  <span>Game Developer</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="btn-social d-flex justify-content-between">
                  <Link
                    legacyBehavior
                    href="https://www.linkedin.com/in/sathiyapriyan-packirisamy-838088153"
                  >
                    <a className="read-more" target="_blank">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    {/* <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a> */}
                    <a
                      href="https://www.linkedin.com/in/sathiyapriyan-packirisamy-838088153"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-6s">
                <div className="image noor-color">
                  <img src="assets/images/team/noor.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Noor Mohammad</h4>
                  <span>Blockchain Developer</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="btn-social d-flex justify-content-between">
                  <Link
                    legacyBehavior
                    href="https://www.linkedin.com/in/noormohammedb/"
                  >
                    <a className="read-more" target="_blank">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    {/* <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a> */}
                    <a
                      href="https://www.linkedin.com/in/noormohammedb/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="team-member wow fadeInUp delay-0-6s">
                <div className="image shelly-color">
                  <img src="assets/images/team/omar.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Muhammad Omar</h4>
                  <span>Mobile Application Developer</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="btn-social d-flex justify-content-between">
                  <Link
                    legacyBehavior
                    href="https://www.linkedin.com/in/muhammad-omar-0335/"
                  >
                    <a className="read-more" target="_blank">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    {/* <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a> */}
                    <a
                      href="https://www.linkedin.com/in/muhammad-omar-0335/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-6s">
                <div className="image kenan-color">
                  <img src="assets/images/team/anas.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Mohamed Anas</h4>
                  <span>Frontend Developer</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="btn-social d-flex justify-content-between">
                  <Link
                    legacyBehavior
                    href="https://www.linkedin.com/in/mohamed-anascp/"
                  >
                    <a className="read-more" target="_blank">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    {/* <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a> */}
                    <a
                      href="https://www.linkedin.com/in/mohamed-anascp/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-6s">
                <div className="image benzy-color">
                  <img src="assets/images/team/Shakara.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Shakara Sabir Ansari</h4>
                  <span>Head of Sales & Marketing</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="btn-social d-flex justify-content-between">
                  <Link
                    legacyBehavior
                    href="https://www.linkedin.com/in/shakara-ansari-3ab503169/"
                  >
                    <a className="read-more" target="_blank">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    {/* <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a> */}
                    <a
                      href="https://www.linkedin.com/in/shakara-ansari-3ab503169/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-6s">
                <div className="image jaz-color">
                  <img src="assets/images/team/jaz.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Jazmine Sebastian</h4>
                  <span>HR & Admin</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="btn-social d-flex justify-content-between">
                  <Link
                    legacyBehavior
                    href="https://www.linkedin.com/in/jazpncsbstn"
                  >
                    <a className="read-more" target="_blank">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    {/* <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a> */}
                    <a
                      href="https://www.linkedin.com/in/jazpncsbstn"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Area end */}
      {/* Statistics Area start */}
      <div
        className="statistics-area pt-100 rpt-70 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={11} extraClass={"plus"} />
                <span className="counter-title">Technical Experience</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={50} extraClass={"plus"} />
                <span className="counter-title">Use Cases</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={8} extraClass={"plus"} />
                <span className="counter-title">Industries</span>
              </div>
            </div>
            {/* <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={92} />
                <span className="counter-title">Awards Winning</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* Statistics Area end */}
      {/* Testimonial Area start */}
      <section className="testimonial-section pt-70 rpt-30">
        <div className="container container-1210">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-four.jpg"
                  alt="Testimonial Left Image"
                />
                <div className="bottom-border" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-one-right-part wow fadeInLeft delay-0-2s">
                <Swiper
                  {...sliderProps.testimonialsActiveSwiper}
                  className="testimonials-active"
                >
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> At G&G Innovations, we
                        are inspired by the potential of technological
                        advancements to transform the world. We are committed to
                        developing innovative web solutions that empower our
                        clients to achieve their goals and make a positive
                        impact. As pioneers in the tech industry, we are
                        constantly striving to stay ahead of the curve and push
                        the boundaries of what is possible. We believe that
                        technology is a powerful tool for good, and we are proud
                        to use our expertise to create a brighter future for
                        all.
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/about/shell.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>Sheley Grover</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      {/* <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div> */}
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> G&G is a leading
                        provider of expert, custom-tailored web solutions. I
                        have had the pleasure of working with them on several
                        projects, and am consistently impressed by their
                        professionalism, creativity, and expertise.
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/334.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>Kathrin Pabst</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide> */}
                  {/* <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide> */}
                  {/* <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide> */}
                </Swiper>
                <div className="testimonial-controls mt-75 rmt-40 pb-60">
                  <button className="testimonial-prev slick-arrow">
                    <i className="far fa-chevron-left" />
                  </button>
                  <div className="testimonial-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-next slick-arrow">
                    <i className="far fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Area end */}
      {/* Client Logo Two start */}
      {/* <section className="client-logo-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-60">
            <h4>We Have 1520+Global Clients</h4>
          </div>
          <div className="client-logo-wrap">
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/client-logos/client-logo1.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-3s">
                <img
                  src="assets/images/client-logos/client-logo2.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/client-logos/client-logo3.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-5s">
                <img
                  src="assets/images/client-logos/client-logo4.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-6s">
                <img
                  src="assets/images/client-logos/client-logo5.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-7s">
                <img
                  src="assets/images/client-logos/client-logo6.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};
export default About;
