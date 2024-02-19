import Layout from "@/src/layout/Layout";
import ReactPlayer from "react-player";
import Link from "next/link";
const BlockChain = () => {
  const video =
    "https://public-general-s3-bucket-gng.s3.amazonaws.com/blockchain.mp4";
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
                Building Blocks to a{" "}
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                />{" "}
                Decentralised Future
              </h1>
              <p className="fadeInUp delay-0-2s wow">
                Revolutionizing the way data is stored and shared with the
                ultimate data security tactics in mind, Blockchain has become
                the absolute necessity to work in tandem with the advanced
                forces of technological developments.
              </p>
              <p className="fadeInUp delay-0-2s wow">
                Blockchain solutions for forward-thinking businesses
              </p>
              <p className="fadeInUp delay-0-2s wow">
                From 2022 to 2030, the worldwide blockchain technology industry
                is predicted to grow at an <b>85.9</b> percent CAGR.
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
                <img src="assets/images/about/blockchain.jpeg" alt="About" />
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
                      <a>BLOCKCHAIN</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Why Blockchain?</span>
                  <h2>Embrace the Revolutionary Force of Blockchain</h2>
                </div>
                <div className="content">
                  <ul className="list-style-three pt-15 pb-25">
                    <li>
                      Omits intermediaries: Blockchain’s creation of a
                      decentralized domain removes the requirement of
                      intermediaries altogether, for a faster, more secure
                      transaction.
                    </li>
                    <li>
                      Promotes transparency: Creating direct links between
                      consumers and service providers, a level of transparency
                      is produced, reducing all fraudulent risks.
                    </li>
                    <li>
                      Secures transactions: From code that notifies
                      peer-networks when data has been attempted to alter to
                      carefully guarded encryption keys, your data is safe.
                    </li>
                    <li>
                      Tamper-proof records: Blockchain's distributed data
                      storage system makes it impossible for data to end up in
                      the wrong hands.
                    </li>
                    <li>
                      Data Integrity: With data breaches on the rise, ensuring
                      the integrity of sensitive information is vital.
                      Blockchain technology secures data with cryptographic
                      methods, protecting it from unauthorized alterations or
                      deletions.
                    </li>
                    <li>
                      Tokenization and Fundraising: Blockchain facilitates the
                      creation of digital assets and tokens, enabling new forms
                      of fundraising.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Page About Area end */}
      {/* How We Works start */}
      <section className="project-timeline-two-area  rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center pt-30 pb-50">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-20">What We Do</span>
              <h2>Special Solutions For Blockchain</h2>
            </div>
          </div>
          <div className="row gap-90 pb-50">
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-2s">
                <h4>
                  <a className="cursor-error">
                    DApps and Blockchain Development
                  </a>
                  <p className="py-2">
                    We specialize in developing robust and customized blockchain
                    solutions tailored to your specific business needs. Our
                    expert team harnesses the potential of blockchain technology
                    to create decentralized applications, smart contracts, and
                    more.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/b3.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <h4>
                  <a className="cursor-error">Token Development</a>
                  <p className="py-2">
                    Empower your business with the creation of your own tokens
                    and digital assets. We provide end-to-end token development
                    services, from conceptualization to deployment, ensuring
                    security and compliance.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/b1.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-2s">
                <h4>
                  <a className="cursor-error">Smart Contracts</a>
                  <p className="py-2">
                    Unlock automation, transparency, and efficiency with our
                    smart contract development. Our team designs and deploys
                    smart contracts that optimize your processes and
                    transactions securely.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/b4.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <h4>
                  <a className="cursor-error">Crypto Wallets</a>
                  <p className="py-2">
                    Secure your digital assets with our reliable cryptocurrency
                    wallet development. We build highly secure and user-friendly
                    wallets that enable seamless management and transactions of
                    various cryptocurrencies.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/b5.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-2s">
                <h4>
                  <a className="cursor-error">Consulting and Education</a>
                  <p className="py-2">
                    Our team of experts offers consulting services to guide you
                    through your blockchain journey. We also provide educational
                    resources to help you understand and leverage the power of
                    blockchain for your business.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/b2.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center pb-50">
            <div className="section-title text-center mb-30 wow fadeInUp delay-0-2s">
              <h2>Unlocking the Future of NFT</h2>
              <p className="wow fadeInUp delay-0-2s">
                Prepare to embark on a journey into the exciting world of NFTs
                with us! In this video, we're thrilled to introduce you to a
                groundbreaking NFT marketplace.
              </p>
            </div>
          </div>
        </div>
        {/* Blockchain video */}
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
      <section className="work-with-area pb-150 rpb-145 rel z-1">
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
export default BlockChain;
