"use client";
import dynamic from "next/dynamic";
import ReactPlayer from "react-player";
// import Video from "../public/assets/images/video/home.mp4";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Index = () => {
  // const [hasWindow, setHasWindow] = useState(false);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setHasWindow(true);
  //   }
  // }, []);
  const video =
    "https://public-general-s3-bucket-gng.s3.amazonaws.com/gng-homepage.mp4";
  return (
    <Layout>
      {/* Hero Section Start */}
      <section className="hero-area pt-185 rpt-150 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content wow fadeInLeft delay-0-2s">
                <h1>
                  Archi-techs <span>of the</span> <i>Future</i>
                </h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-right-image mt-20 wow fadeInUp delay-0-4s">
                <img src="assets/images/hero/hero-right.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="hero-bottom-image ">
            <ReactPlayer
              url={video}
              controls={false}
              loop
              playing
              playsinline={true}
              muted={true}
              className="video-container"
            />

            {/* <img src="assets/images/hero/hero.jpg" alt="Hero" /> */}
            <div className="hero-social">
              <a
                href="https://www.facebook.com/profile.php?id=100091663875681"
                target="_blank"
              >
                <i className="fab fa-facebook-f" /> <span>Facebook</span>
              </a>
              <a
                href="https://www.linkedin.com/company/g-g-innovations/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in" /> <span>Linkedin</span>
              </a>
              <a
                href="https://www.instagram.com/gnginnovations/"
                target="_blank"
              >
                <i className="fab fa-instagram" /> <span>Instagram</span>
              </a>
              <a
                className="a-icon cursor"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCZ8YJt8gCmvVIt7-IZtRevQ/"
                  )
                }
              >
                <i className="fab fa-youtube" /> <span>Youtube</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-bg">
          <img src="assets/images/hero/hero-bg.png" alt="lines" />
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Us Area start */}
      <section className="about-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-3">
              <div className="about-image rmb-45 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/about/circle-text.svg"
                  alt="Circle Text"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>
                    Our Goal is to meet the needs of our diverse clientele
                  </h2>
                </div>
                <div className="content">
                  <p>
                    You have an idea, we have the technology and resources to
                    turn it into reality. We aspire to digitise businesses
                    through ground-breaking user experience and disruptive
                    digital products and support from ideation to launch &
                    further beyond.
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="read-more mt-10">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-90 rpt-85 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              Your <span>problems;</span> our solutions
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* What We Do start */}
      <section className="what-we-do-area pt-90 rpt-80 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-8">
              <div className="what-we-do-content mb-55">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">What We Do</span>
                  <h2>
                    Offer ground-breaking solutions to lead the tech-volution
                  </h2>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-3s">
                  <div className="number">
                    <span>01</span>
                  </div>
                  <div className="content">
                    <h5>Metaverse and Game Development</h5>
                    <p>
                      Harness the metaverse’s power using virtual and augmented
                      reality and offer gaming experiences.
                    </p>
                    {/* <Link legacyBehavior href="/service-details">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link> */}
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-5s">
                  <div className="number">
                    <span>02</span>
                  </div>
                  <div className="content">
                    <h5>Blockchain and Smart Contract</h5>
                    <p>
                      Seamless integrations ensuring enhanced security,
                      transparency, and efficiency for your operation.
                    </p>
                    {/* <Link legacyBehavior href="/service-details">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link> */}
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-7s">
                  <div className="number">
                    <span>03</span>
                  </div>
                  <div className="content">
                    <h5>Custom Web and Mobile Applications</h5>
                    <p>
                      Our client-centred web solutions make navigation a breeze
                      and ensure visitor influx.
                    </p>
                    {/* <Link legacyBehavior href="/service-details">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
                <img src="assets/images/services/11.png" alt="What We Do" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do end */}
      {/* Statistics Area start */}
      <div className="statistics-area pt-75 rpt-45 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={11} extraClass={"plus"} />
                <span className="counter-title">Technical Experience</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={50} extraClass={"plus"} />
                <span className="counter-title">Use Cases</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={8} extraClass={"plus"} />
                <span className="counter-title">Industries</span>
              </div>
            </div>
            {/* <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={92} />
                <span className="counter-title">Awards Winning</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="container-fluid">
        <Swiper
          {...sliderProps.galleryFiveActive}
          className="gallery-five-active"
        >
          <SwiperSlide className="project-item style-five wow fadeInUp delay-0-2s slidewidth">
            <div className="service-three-item  " >
              <div className="title-icon">
                <h5>
                  Metaverse and Virtual Reality Experiences
                
                </h5>
                <img
                  src="assets/images/services/vr.png"
                  alt="Icon"
                  className="vr "
                />
              </div>
              <div className="content">
                <p>
                  VR tech paired with 3D-modelling to offer New Reality with
                  enhanced experiences.
                </p>
            
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="project-item style-five wow fadeInUp delay-0-2s slidewidth">
            <div className="service-three-item wow fadeInDown delay-0-2s ">
              <div className="title-icon">
                <h5>
                  Smart Contracts & DApps
                
                </h5>
                <img
                  src="assets/images/services/meta.png"
                  alt="Icon"
                  className="vr"
                />
              </div>
              <div className="content">
                <p>
                  Technology that ensures secure & transparent transactions.
                </p>
              
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="project-item style-five wow fadeInUp delay-0-2s slidewidth">
            <div className="service-three-item wow fadeInDown delay-0-2s ">
              <div className="title-icon">
                <h5>
                  Progressive Web 3.0 and Mobile Applications
                
                </h5>
                <img
                  src="assets/images/services/icon1.png"
                  alt="Icon"
                  className="vr"
                />
              </div>
              <div className="content">
                <p>
                  Seamlessly engage your audience on web and mobile platforms
                  with you.
                </p>
            
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="project-item style-five wow fadeInUp delay-0-2s slidewidth">
            <div className="service-three-item wow fadeInDown delay-0-2s ">
              <div className="title-icon">
                <h5>
                  NFT and Token Development
                
                </h5>
                <img
                  src="assets/images/services/nft.png"
                  alt="Icon"
                  className="vr"
                />
              </div>
              <div className="content">
                <p>Redefine Ownership, Trade, and Digital Innovation.</p>
             
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="project-item style-five wow fadeInUp delay-0-2s slidewidth">
            <div className="service-three-item wow fadeInDown delay-0-2s ">
              <div className="title-icon">
                <h5>
                  Web 3.0 and AI Development
               
                </h5>
                <img
                  src="assets/images/services/aiw.png"
                  alt="Icon"
                  className="ms"
                />
              </div>
              <div className="content">
                <p>
                  Next generation of the web and Tailor made solutions to
                  automate.
                </p>
              
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="project-item style-five wow fadeInUp delay-0-2s slidewidth">
            <div className="service-three-item wow fadeInDown delay-0-2s ">
              <div className="title-icon">
                <h5>
                  Marketing as a Service
                 
                </h5>
                <img
                  src="assets/images/services/msa.png"
                  alt="Icon"
                  className="ms"
                />
              </div>
              <div className="content">
                <p>
                  Elevate your brand's presence with our comprehensive marketing
                  solutions.
                </p>
               
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}
      {/* Statistics Area end */}
      {/* Service Style Three start */}
      <section className="service-three-area pt-70 rpt-40 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s ">
                <span className="sub-title mb-20">Popular Services</span>
                <h2>Delve into our world of expertise</h2>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-2s">
                <div className="title-icon">
                  <h5>
                    Metaverse and Virtual Reality Experiences
                    {/* <Link legacyBehavior href="/service-details">
                      <a></a>
                    </Link> */}
                  </h5>
                  <img
                    src="assets/images/services/vr.png"
                    alt="Icon"
                    className="vr "
                  />
                </div>
                <div className="content">
                  <p>
                    VR tech paired with 3D-modelling to offer New Reality with
                    enhanced experiences.
                  </p>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInDown delay-0-2s">
                <div className="title-icon">
                  <h5>
                    Progressive Web 3.0 and Mobile Applications
                    {/* <Link legacyBehavior href="/service-details">
                      <a></a>
                    </Link> */}
                  </h5>
                  <img
                    src="assets/images/services/icon1.png"
                    alt="Icon"
                    className="vr"
                  />
                </div>
                <div className="content">
                  <p>
                    Seamlessly engage your audience on web and mobile platforms
                    with you.
                  </p>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-2s">
                <div className="title-icon">
                  <h5>
                    Smart Contracts & DApps
                    {/* <Link legacyBehavior href="/service-details">
                      <a></a>
                    </Link> */}
                  </h5>
                  <img
                    src="assets/images/services/meta.png"
                    alt="Icon"
                    className="vr"
                  />
                </div>
                <div className="content">
                  <p>
                    Technology that ensures secure & transparent transactions.
                  </p>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInDown delay-0-2s">
                <div className="title-icon">
                  <h5>
                    NFT and Token Development
                    {/* <Link legacyBehavior href="/service-details">
                      <a></a>
                    </Link> */}
                  </h5>
                  <img
                    src="assets/images/services/nft.png"
                    alt="Icon"
                    className="vr"
                  />
                </div>
                <div className="content">
                  <p>Redefine Ownership, Trade, and Digital Innovation.</p>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInDown delay-0-2s">
                <div className="title-icon">
                  <h5>
                    Web 3.0 and AI Development
                    {/* <Link legacyBehavior href="/service-details">
                      <a></a>
                    </Link> */}
                  </h5>
                  <img
                    src="assets/images/services/aiw.png"
                    alt="Icon"
                    className="ms"
                  />
                </div>
                <div className="content">
                  <p>
                    Next generation of the web and Tailor made solutions to
                    automate.
                  </p>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInDown delay-0-2s">
                <div className="title-icon">
                  <h5>
                    Marketing as a Service
                    {/* <Link legacyBehavior href="/service-details">
                      <a></a>
                    </Link> */}
                  </h5>
                  <img
                    src="assets/images/services/msa.png"
                    alt="Icon"
                    className="ms"
                  />
                </div>
                <div className="content">
                  <p>
                    Elevate your brand's presence with our comprehensive
                    marketing solutions.
                  </p>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Style Three end */}
      {/* Headline area start */}
      <div className="headline-area pt-65 rpt-60 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              <span>Reshaping</span> Realities
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Project Timeline Area start */}
      <section className="project-timeline-area pt-90 rpt-75 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center pb-25">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-30 wow fadeInLeft delay-0-2s">
                <span className="sub-title mb-15">Recent Projects</span>
                <h2>Our Portfolio - Work that Reflects Dedication</h2>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link legacyBehavior href="/project-list">
                <a className="theme-btn mb-25 wow fadeInRight delay-0-2s">
                  View More Projects <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">01</span>
              <h4>
                <Link legacyBehavior href="/project-list">
                  <a>Next commerce Reimagined in Metaverse </a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <img
                src="assets/images/projects/goldsmall.png"
                alt="Project TimeLine Image"
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href="/project-list">
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">02</span>
              <h4>
                <Link legacyBehavior href="/project-list">
                  <a> AI-Driven Excellence in Every App</a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <img
                src="assets/images/projects/4eversmall.png"
                alt="Project TimeLine Image"
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href="/project-list">
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">03</span>
              <h4>
                <Link legacyBehavior href="/project-list">
                  <a>Sports Betting App with in built NFT </a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <img
                src="assets/images/projects/letsmall.png"
                alt="Project TimeLine Image"
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href="/project-list">
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">04</span>
              <h4>
                <Link legacyBehavior href="/project-list">
                  <a>NFT MarketPlace </a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <img
                src="assets/images/projects/nft2.png"
                alt="Project TimeLine Image"
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href="/project-list">
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Project Timeline Area end */}
      {/* Team Area start */}
      <section className="team-area pt-70 rpt-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Team Members</span>
                <h2>Meet our team of problem-solving experts</h2>
              </div>
            </div>
          </div>
        </div>
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
              <div className="team-member wow fadeInUp delay-0-4s">
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
                  <span>Chief Technology Officer</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="btn-social d-flex justify-content-between">
                  <Link
                    legacyBehavior
                    href="https://www.linkedin.com/in/benzy-aman-027a8812/"
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
                      href="https://www.linkedin.com/in/benzy-aman-027a8812/"
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
              <div className="team-member wow fadeInUp delay-0-6s">
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
                <div className="content ">
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
              <div className="team-member wow fadeInUp delay-0-5s">
                <div className="image noor-color">
                  <img src="assets/images/team/noor.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Noor Muhammad</h4>
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
              <div className="team-member wow fadeInUp delay-0-5s">
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
              <div className="team-member wow fadeInUp delay-0-5s">
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
              <div className="team-member wow fadeInUp delay-0-5s">
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
              <div className="team-member wow fadeInUp delay-0-5s">
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
              <div className="team-member wow fadeInUp delay-0-5s">
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
              <div className="team-member wow fadeInUp delay-0-5s">
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
              <div className="team-member wow fadeInUp delay-0-5s">
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
      {/* Headline area start */}
      {/* <div className="headline-area pt-65 rpt-55 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              pricing <span>Package</span>
            </span>
          </div>
        </div>
      </div> */}
      {/* Headline Area end */}
      {/* Pricing style three start */}
      {/* <section className="pricing-area-three pt-85">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Pricing Package</span>
                <h2>Best Pricing Package For All Web Design Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-2s">
              <div
                className="pricing-banner"
                style={{
                  backgroundImage:
                    "url(assets/images/background/pricing-banner-bg.jpg)",
                }}
              >
                <span className="join-us">Join With Us</span>
                <h4>Amazing Pricing For Growth Business</h4>
                <Link legacyBehavior href="/pricing">
                  <a className="details-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <div className="hand-shape">
                  <img
                    src="assets/images/shapes/pricing-banner-hand-shape.png"
                    alt="Pricing Banner Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-4s">
              <div
                className="pricing-plan-item style-three"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/pricing-plan-bg.png)",
                }}
              >
                <div className="icon-title">
                  <div className="icon">
                    <img src="assets/images/icons/price.svg" alt="Icon" />
                  </div>
                  <h5>Monthly Package</h5>
                </div>
                <p>
                  We denounce with righteous indignation dislike beguiled and
                  demoralize
                </p>
                <ul className="list-style-one">
                  <li>Landing Page Design</li>
                  <li>Web Development</li>
                  <li>SEO Optimizations</li>
                  <li>Mobile Applications Design</li>
                  <li>Quality Assurance</li>
                  <li>Customs Services</li>
                </ul>
                <div className="price-offer">
                  <span className="price-text">
                    <span className="before">$</span>
                    <span className="price">18.3</span>
                  </span>
                  <img src="assets/images/shapes/right-arrow.png" alt="Arrow" />
                  <span className="offer-text">Save 15%</span>
                </div>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-6s">
              <div
                className="pricing-plan-item style-three"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/pricing-plan-bg.png)",
                }}
              >
                <div className="icon-title">
                  <div className="icon">
                    <img src="assets/images/icons/price.svg" alt="Icon" />
                  </div>
                  <h5>Yearly Package</h5>
                </div>
                <p>
                  We denounce with righteous indignation dislike beguiled and
                  demoralize
                </p>
                <ul className="list-style-one">
                  <li>Landing Page Design</li>
                  <li>Web Development</li>
                  <li>SEO Optimizations</li>
                  <li>Mobile Applications Design</li>
                  <li>Quality Assurance</li>
                  <li>Customs Services</li>
                </ul>
                <div className="price-offer">
                  <span className="price-text">
                    <span className="before">$</span>
                    <span className="price">18.3</span>
                  </span>
                  <img src="assets/images/shapes/right-arrow.png" alt="Arrow" />
                  <span className="offer-text">Save 15%</span>
                </div>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Pricing style three end */}
      {/* Why Choose Us Area start */}
      <section className="why-choose-area pt-90 rpt-60 rel z-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-7">
              <div className="why-choose-left-image mb-40 wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/services/1.png"
                  alt="Why Choose Left Image"
                />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="why-choose-two-wrap">
                <div className="section-title mb-55 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Why Choose Us</span>
                  <h2>We Provide Services In One Places</h2>
                </div>
                <div className="why-choose-item-two wow fadeInUp delay-0-3s">
                  <div className="icon">
                    <i className="fas fa-check" />
                    <span className="icon-bottom-shape" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Non-Traditional Approach</a>
                      </Link>
                    </h4>
                    <p>
                      Creative strategies that transcend conventional
                      problem-solving & manoeuvre unique business hurdles with
                      agile practices.
                    </p>
                  </div>
                </div>
                <div className="why-choose-item-two wow fadeInUp delay-0-5s">
                  <div className="icon">
                    <i className="fas fa-check" />
                    <span className="icon-bottom-shape" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Establishing Digital Identity</a>
                      </Link>
                    </h4>
                    <p>
                      At G&G we make sure that your products speak narratives
                      that align with your brand's entity to a T.
                    </p>
                  </div>
                </div>
                <div className="why-choose-item-two wow fadeInUp delay-0-7s">
                  <div className="icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Empowerment through Software </a>
                      </Link>
                    </h4>
                    <p>
                      What everyone labels impossible, is just our starting
                      point. We aim to not just innovate, but empower.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-60 rpt-50 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              <span>satisfied</span> clients
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Testimonial Area start */}
      <section className="testimonials-three-area pt-95 rpt-70 pb-60">
        <div className="container container-1260">
          <div className="row gap-120 align-items-center">
            <div className="col-lg-6">
              <div className="testimonial-one-right-part rmb-75">
                <Swiper
                  {...sliderProps.testimonialsThreeActiveSwiper}
                  className="testimonials-three-active wow fadeInUp delay-0-2s"
                >
                  <SwiperSlide className="testimonial-item style-three">
                    <div className="ratting style-two">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <div className="author-speech">
                      <p>
                        From the initial consultation to the final launch of my
                        website, G&G took the time to understand my business
                        goals and target audience and developed a website that
                        is both visually appealing and user-friendly.
                      </p>
                    </div>
                    <div className="middle-quote">
                      <div className="icon">
                        <i className="flaticon-right-quote" />
                      </div>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-info">
                          <h4>Karishma</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item style-three">
                    <div className="ratting style-two">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <div className="author-speech">
                      <p>
                        G&G is a leading provider of expert, custom-tailored web
                        solutions. I have had the pleasure of working with them
                        on several projects, and am consistently impressed by
                        their professionalism, creativity, and expertise.
                      </p>
                    </div>
                    <div className="middle-quote">
                      <div className="icon">
                        <i className="flaticon-right-quote" />
                      </div>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-info">
                          <h4>Hinen</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide className="testimonial-item style-three">
                    <div className="ratting style-two">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <div className="author-speech">
                      <p>
                        On the other hand we denounce see with righteous
                        indignation and dislike men who are so beguiled
                        demoralized by the charms pleasure moment
                      </p>
                    </div>
                    <div className="middle-quote">
                      <div className="icon">
                        <i className="flaticon-right-quote" />
                      </div>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-info">
                          <h4>Richard S. Robertson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide> */}
                  {/* <SwiperSlide className="testimonial-item style-three">
                    <div className="ratting style-two">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <div className="author-speech">
                      <p>
                        On the other hand we denounce see with righteous
                        indignation and dislike men who are so beguiled
                        demoralized by the charms pleasure moment
                      </p>
                    </div>
                    <div className="middle-quote">
                      <div className="icon">
                        <i className="flaticon-right-quote" />
                      </div>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-info">
                          <h4>Richard S. Robertson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide> */}
                </Swiper>
                <div className="testimonial-controls style-three mt-65 rmt-40 wow fadeInUp delay-0-3s animated">
                  <button className="testimonial-three-prev slick-arrow slick-disabled">
                    <i className="far fa-long-arrow-left" />
                  </button>
                  <div className="testimonial-three-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-three-next slick-arrow">
                    <i className="far fa-long-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonials-three-image wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/about-image-shape.png"
                  alt="Testimonials"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Area end */}
      {/* Blog Style Two start */}
      {/* <section className="blog-area-two pt-125 rpt-100 pb-70 rpb-40">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Blog &amp; News</span>
                <h2>Read Our Latest News &amp; Blog Get Every Updates</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul>
                <hr />
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>Voice Skills For Google Assistant And Amazon Alexa</a>
                  </Link>
                </h4>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul>
                <hr />
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      Inclusive Design And Accessibility Stream Heydon Pickering
                    </a>
                  </Link>
                </h4>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul>
                <hr />
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      Creating Online Environments The Work Well For Older Users
                    </a>
                  </Link>
                </h4>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Blog Style Two end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Index;
