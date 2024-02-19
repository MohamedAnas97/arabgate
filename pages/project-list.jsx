import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const ProjectList = () => {
  return (
    <Layout>
      {/* Page Banner Start */}
      {/* <PageBanner pageName={"G&G’S WORK"} />
      <section className="page-banner rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-item blog-standard wow fadeInUp delay-0-2s">
                <h4 className="text-center">
                  Our track record speaks for itself. Take a look at the
                  remarkable products we've co-created with our valued partners.
                  Join us and let's build something great together.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title style-two mb-50 rmb-50 wow fadeInUp delay-0-2s">
                G&G’S WORK
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                />
              </h1>
              <p className="fadeInUp delay-0-2s wow">
                Our track record speaks for itself. Take a look at the
                remarkable products we've co-created with our valued partners.
                Join us and let's build something great together.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* Project List Area start */}
      <section className="project-list-area pt-130 rpt-100 pb-10 rpb-25">
        <div className="container">
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <div>
                <img
                  src="assets/images/projects/gold2.png"
                  alt="Project List"
                />
              </div>
              {/* <Link legacyBehavior href="/project-details"> */}
              {/* <a className="project-btn">
                <i className="far fa-arrow-right" />
              </a> */}
              {/* </Link> */}
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              {/* <Link legacyBehavior href="/projects"> */}
              <a className="category cursor-error">Creative Work</a>
              {/* </Link> */}
              <h2>
                {/* <Link legacyBehavior href="/project-details"> */}
                <a className="cursor-error">
                  Next commerce platform <br /> <i>Gold Souk</i>
                </a>
                {/* </Link> */}
              </h2>
              <hr />
              <p>
                A digital platform that showcases luxurious jewellery powered by
                emerging technologies like metaverse and AI.
              </p>
              {/* <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link> */}
            </div>
          </div>
          <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s">
              {/* <Link legacyBehavior href="/projects"> */}
              <a className="category cursor-error">Digital Product</a>
              {/* </Link> */}
              <h2>
                {/* <Link legacyBehavior href="/project-details"> */}
                <a className="cursor-error">
                  Mobile Application <br /> <i>4Everinlove</i>
                </a>
                {/* </Link> */}
              </h2>
              <hr />
              <p>
                A matrimony application that provides a seamless digital
                alternative to the experience of finding a partner in reality.
              </p>
              {/* <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link> */}
            </div>
            <div className="image wow fadeInRight delay-0-2s">
              <img src="assets/images/projects/4ever.png" alt="Project List" />
              {/* <Link legacyBehavior href="/project-details"> */}
              {/* <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a> */}
              {/* </Link> */}
            </div>
          </div>
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/let.png" alt="Project List" />
              {/* <Link legacyBehavior href="/project-details"> */}
              {/* <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a> */}
              {/* </Link> */}
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              {/* <Link legacyBehavior href="/projects"> */}
              <a className="category cursor-error">Creative Work</a>
              {/* </Link> */}
              <h2>
                {/* <Link legacyBehavior href="/project-details"> */}
                <a className="cursor-error">
                  Gaming Application
                  <br />
                  <i>Let's Win</i>
                </a>
                {/* </Link> */}
              </h2>
              <hr />
              <p>
                A gaming application nested with an algorithm that allows users
                to predict and win on-the-go.
              </p>
              {/* <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link> */}
            </div>
          </div>

          <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s">
              {/* <Link legacyBehavior href="/projects"> */}
              <a className="category cursor-error">Digital Product</a>
              {/* </Link> */}
              <h2>
                {/* <Link legacyBehavior href="/project-details"> */}
                <a className="cursor-error">
                  Digital Twins <br />
                  <i>Real Estate Digi Twins</i>
                </a>
                {/* </Link> */}
              </h2>
              <hr />
              <p>
                The project is an innovative and immersive 3D experience that
                allows users to explore a housing society in real-time using
                cutting-edge VR experience provided by metaverse technology.
                This unique venture combines the thrill of virtual exploration
                with the ability to invest in housing assets within the society
                through a dedicated NFT marketplace.
              </p>
              {/* <Link legacyBehavior href="/project-details"> */}
              {/* <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a> */}
              {/* </Link> */}
            </div>
            <div className="image wow fadeInRight delay-0-2s">
              <img src="assets/images/projects/real.png" alt="Project List" />
              {/* <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link> */}
            </div>
          </div>
          {/* <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/project-list5.jpg"
                alt="Project List"
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Creative Work</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>
                    Product Design <i>&amp; Branding</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sitesy
                voluptatem accusantium doloremque lauda
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div> */}
          {/* <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Digital Product</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>
                    Digital Content For <i>Web Development</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sitesy
                voluptatem accusantium doloremque lauda
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/projects/project-list6.jpg"
                alt="Project List"
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div> */}
        </div>
      </section>
      {/* Project List Area end */}
      {/* Work With Area start */}
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
      {/* Work With Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default ProjectList;
