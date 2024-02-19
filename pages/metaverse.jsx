import Layout from "@/src/layout/Layout";
import ReactPlayer from "react-player";
import Link from "next/link";
const Metaverse = () => {
  const video =
    "https://public-general-s3-bucket-gng.s3.amazonaws.com/metavese.mp4";
  return (
    <Layout>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-25 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title style-two mb-50 rmb-50 wow fadeInUp delay-0-2s">
                Transcending
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                />
                <br />
                Dimensions Shifting Realities
              </h1>
              {/* <h3>We bring a tech-savvy touch to amplify your immersion</h3> */}
              <h3 className="fadeInUp delay-0-2s wow py-3">
                We bring a tech-savvy touch to amplify your immersion
              </h3>
              <p className="fadeInUp delay-0-2s wow">
                You see the potential in the Metaverse? We see the potential in
                you. Let’s set off on this quest together.
              </p>
              <p className="fadeInUp delay-0-2s wow">
                The global metaverse market is expected to reach $936.57 billion
                by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Services Page About Area start */}
      <section className="service-page-about py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div className="service-about-image rmb-55 wow fadeInUp delay-0-2s">
                <img src="assets/images/about/metaverse.png" alt="About" />
                <div
                  className="service-about-box bgc-primary"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/work-step-bg.png)",
                  }}
                >
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      <i className="fal fa-arrow-right" />
                    </a>
                  </Link> */}
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>METAVERSE </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">What We Do</span>
                  <h2>Special Solutions For Metaverse</h2>
                </div>
                <div className="content">
                  <ul className="list-style-three pt-15 pb-25">
                    <li>
                      Metaverse Consultation: Start your metaverse journey with
                      expert guidance.
                    </li>
                    <li>
                      Metaverse Land Acquisition: Simplifying property
                      transactions in the metaverse with our expertise.
                    </li>
                    <li>
                      Virtual Tours: Create immersive product experiences for
                      enhanced engagement.
                    </li>
                    <li>
                      Meta Training & Education: Enhance your skills and
                      capabilities through our metaverse solutions.
                    </li>
                    <li>
                      Metaverse Virtual Showrooms: Elevate virtual reality
                      experiences for your interests and niches.
                    </li>
                    <li>
                      AR-Integrated Metaverse Solutions: Harness the metaverse's
                      potential with immersive technology-driven solutions.
                    </li>
                  </ul>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Timeline-two Area start */}
      <section className="project-timeline-two-area  rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center pt-30 pb-50">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-20">Popular Services</span>
              <h2>
                Empower Your Metaverse Experience with Cutting-Edge App
                Development Solutions
              </h2>
            </div>
          </div>
          <div className="row gap-90 pb-50">
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-2s">
                <h4>
                  <a className="cursor-error">
                    Advanced Metaverse App Development
                  </a>
                  <p className="py-2">
                    We specialize in crafting real-time, immersive experiences
                    tailored to various sectors such as e-commerce, real estate,
                    fashion, entertainment, and more.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/m1.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <h4>
                  <a className="cursor-error">Metaverse Land NFT Creation</a>
                  <p className="py-2">
                    Our dedicated Metaverse development team expertly produces
                    Land NFTs, assisting businesses from diverse industries in
                    hosting their Metaverse lands.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/m3.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-2s">
                <h4>
                  <a className="cursor-error">
                    Immersive Social Media Metaverse Solutions
                  </a>
                  <p className="py-2">
                    To enable genuine social interactions, we engineer highly
                    immersive social media platforms within the Metaverse,
                    designed for tight-knit communities.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/m4.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <h4>
                  <a className="cursor-error">
                    Next-Generation Metaverse 3D Avatars
                  </a>
                  <p className="py-2">
                    We create exceptional 3D avatars equipped with versatile
                    features suitable for a wide range of applications,
                    including gaming and fashion.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/m8.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-2s">
                <h4>
                  <a className="cursor-error">
                    Metaverse Digital Twin Precision
                  </a>
                  <p className="py-2">
                    We specialize in the precise development of digital twins
                    for the Metaverse, whether it's for merchandise, real
                    estate, cities, and beyond.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/m7.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <h4>
                  <a>360-Degree Facilities Management</a>
                  <p className="py-2">
                    The 360-degree approach ensures a holistic view, providing
                    unmatched insights and control for your operations.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/m6.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center pb-50">
            <div className="section-title text-center mb-30 wow fadeInUp delay-0-2s">
              <h2>Revolutionizing the Art World Unveiling NFT Marketplace</h2>
              <p className="wow fadeInUp delay-0-2s">
                Discover a whole new way to buy, sell, and trade digital art and
                collectibles with this cutting-edge platform. We'll walk you
                through the innovative features, the user-friendly interface
                and how it is making waves in the NFT space.
              </p>
            </div>
          </div>
        </div>
        {/* Metaverse video */}
        <div className="container-fluid wow fadeInUp delay-0-2s">
          <div className="video-part style-two mb-70 wow fadeInUp delay-0-2s">
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
      </section>

      {/* Services Page About Area end */}

      {/* <section className="how-we-works-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title mb-40 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">How We Works</span>
            <h2>The Metaverse is the next big thing</h2>
            <div className="text mt-30">
              <p>
                A world defined by infinite possibilities through an elevated
                collaboration of the physical world and the virtual realm.
                Combining all the elements of your greatest imagination paired
                with exceptional innovation to produce a marked, imperial
                reality. Goldman Sachs forecast the metaverse as an $8 trillion
                industry. We provide innovative metaverse services and solutions
                that provide users with impeccable virtual experiences that
                reflect unparalleled realism. Whether it is for social events,
                networking or gaming, we’re here to provide you with the most
                surreal experience to step up your game in the ever-expanding
                metaverse. Unleashing the Metaverse comes with responsibilities
                that entail sustainability, data security, inclusion and
                diversity, we’ve got all your needs and concerns covered.
                Unleashing the Metaverse comes with responsibilities that entail
                sustainability, data security, inclusion and diversity, we’ve
                got all your needs and concerns covered.The world is ready to
                take charge and be at the forefront of this tech- volution and
                take its challenges head-on, are you?
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* <div className="video-area-two rel z-1 mb-100">
        <div className="container-fluid">
          <div className=" wow fadeInUp delay-0-2s">
            <div class="sketchfab-embed-wrapper">
              {" "}
              <iframe
                title="Lamborghini"
                frameborder="0"
                allowfullscreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                style={{ width: "100%", height: "1000px" }}
                src="https://sketchfab.com/models/2a99383724e44a5b9dd00747246e33f7/embed"
              >
                {" "}
              </iframe>{" "}
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="video-area-two rel z-1 mb-100">
        <div className="container-fluid">
          <div className="video-part style-two wow fadeInUp delay-0-2s">
            <img src="assets/images/video/video-two-bg.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>{" "} */}

      <section className="work-with-area pb-100 pt-30 rpb-145 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Work With Us</span>
                <h2>Have Any Projects On Minds! Feel Free to Contact Us</h2>
                <Link legacyBehavior href="/contact">
                  <a className="explore-more text-start mt-30">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Explore more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="big-text light-opacity">Let’s Work Together</span>
      </section>
      {/* FAQ's Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Metaverse;
