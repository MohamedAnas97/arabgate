import Layout from "@/src/layout/Layout";
import Link from "next/link";
const ArtificialIntelligence = () => {
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
                Empowering{" "}
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                />{" "}
                <br />
                businesses through transformative technology
              </h1>
              <p className="fadeInUp delay-0-2s wow">
                AI is transforming the way we operate as a society and has
                become an integral part of success-driven and ambitious
                businesses. The future of industries is not just outlined by AI
                but wholly defined by it.
              </p>
              <p className="fadeInUp delay-0-2s wow">
                The AI market is already worth <b>$136.55</b> billion, according
                to Grand View Research and its CAGR is predicted to show a
                growth of <b>37.3%</b> from 2023 to 2030.
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
                <img src="assets/images/about/aiimage.jpg" alt="About" />
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
                      <a>ARTIFICIAL INTELLIGENCE</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">What We Do</span>
                  <h2>Special Solutions For AI</h2>
                </div>
                <div className="content">
                  <ul className="list-style-three pt-15 pb-25">
                    <li>
                      AI Development and Customization: We specialize in
                      developing tailored AI solutions to suit your business
                      needs. From recommendation systems to predictive
                      analytics, our AI development services help optimize your
                      operations and decision-making.
                    </li>
                    <li>
                      Chatbots and Virtual Assistants: Enhance customer
                      engagement with AI-powered chatbots and virtual
                      assistants. We create conversational interfaces that
                      streamline interactions, answer queries, and provide a
                      seamless user experience.
                    </li>
                    <li>
                      AI Consulting and Strategy: Navigating the AI landscape
                      can be complex. Our AI consulting services guide you in
                      formulating a comprehensive AI strategy, ensuring
                      alignment with your business goals and maximizing ROI.
                    </li>
                    <li>
                      Predictive analysis: Staying ahead of the curve by using
                      futuristic forecasting tools to ensure that you meet your
                      business goals.
                    </li>
                    <li>
                      Market insights: Optimize your business functionality by
                      data driven market insights that create higher
                      expectations and yield more successful business outcomes.
                    </li>
                    <li>
                      Decision intelligence: Reduce time spent deciding the best
                      course of action for your business with descriptive
                      diagnostics and predictive analytics, so you are always
                      one step ahead in the competitive market.
                    </li>
                  </ul>
                  {/* <Link legacyBehavior href="/about">
                    <a className="read-more mt-10 color-primary">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Page About Area end */}
      <section className="project-timeline-two-area  rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center pt-30 pb-50">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-20">Popular Serivces</span>
              <h2>AI reshaping industries</h2>
            </div>
          </div>
          <div className="row gap-90 pb-50">
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-2s">
                <h4>
                  <a className="cursor-error">Healthcare</a>
                  <p className="py-2">
                    Through advanced data algorithms healthcare providers are
                    able to extend the most effective treatment options by
                    analyzing vast patient data including patient history and
                    genetic information.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/health.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <h4>
                  <a className="cursor-error">Banking and finance</a>
                  <p className="py-2">
                    AI’s ability to review patterns of client income, savings,
                    expenses, investments and financial goals through agile and
                    accurate analytic methods can provide reliable feedback
                    cutting response time in half.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/ai1.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-2s">
                <h4>
                  <a className="cursor-error">E-commerce</a>
                  <p className="py-2">
                    The AI-enabled eCommerce market size is projected to reach
                    $16.8 billion by 2030.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/ai3.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <h4>
                  <a className="cursor-error">Retail</a>
                  <p className="py-2">
                    Helping retailers gain more insight into customer needs and
                    demands, AI enhances their understanding and anticipation of
                    the growing market to yield the best possible outcomes in
                    terms of the lifetime value of customers.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/ai5.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-2s">
                <h4>
                  <a className="cursor-error">Software and Technology</a>
                  <p className="py-2">
                    From streamlining processes to shifting developer’s roles,
                    AI has reshaped the world of software development as a
                    whole.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/ai2.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <h4>
                  <a>Transport</a>
                  <p className="py-2">
                    Whether it is the incredible innovation of autonomous
                    vehicles or the application of intelligent traffic
                    management, transportation has forever been transformed by
                    AI.
                  </p>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/ai4.png"
                    alt="Project TimeLine Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why choose us */}
      <section className="work-process-three-area pt-80 pb-40 rpt-80 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title style-two text-center mb-25 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Why Choose Us?</span>
                <h3>
                  At G&G we help companies produce AI solutions and set foot on
                  the creative journey alongside you, connecting dots from
                  design to development.
                </h3>
              </div>
            </div>
          </div>
          <div className="row gap-70">
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item bg-shape-none arrow-none wow fadeInUp delay-0-2s">
                <h4 className="title">Expertise</h4>
                <div className="content">
                  <p>
                    Our team consists of AI experts with a deep understanding of
                    the latest advancements and technologies in the field
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item bg-shape-none wow fadeInUp delay-0-3s">
                <h4 className="title">Customization</h4>
                <div className="content">
                  <p>
                    We tailor AI solutions to address your unique business
                    challenges, ensuring optimal results and value.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item bg-shape-none arrow-none wow fadeInUp delay-0-4s">
                <h4 className="title">Innovation</h4>
                <div className="content">
                  <p className="py-10">
                    We stay ahead of the curve, continuously researching and
                    implementing the latest AI trends to keep your business at
                    the forefront of technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item bg-shape-none arrow-none wow fadeInUp delay-0-5s">
                <h4 className="title">Results-Driven</h4>
                <div className="content">
                  <p>
                    Our focus is on delivering tangible results, be it increased
                    efficiency, cost savings, or enhanced customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
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
      <section className="work-with-area pt-60 pb-150 rpb-145 rel z-1">
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
export default ArtificialIntelligence;
