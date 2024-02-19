import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Services = () => {
  return (
    <Layout>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                Services that
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                />
                turn good ideas into great innovations
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Feature Three Area start */}
      <section className="feature-three-area pb-50 rpb-20 rel z-1">
        <div className="container container-1290">
          <div className="row gap-130">
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <span className="serial-number">01</span>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="content">
                  <h4>
                    {/* <Link legacyBehavior href="/service-details"> */}
                    Metaverse Consultations and Development
                    {/* </Link> */}
                  </h4>
                  <p>
                    Think about harnessing the metaverse’s power using virtual
                    and augmented reality, combined with ecommerce marketplace
                    or any of your silo applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">02</span>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="content">
                  <h4>
                    {/* <Link legacyBehavior href="/service-details"> */}
                    AR/VR/XR Experiences & Applications
                    {/* </Link> */}
                  </h4>
                  <p>
                    Our AR/VR/XR experiences and applications redefine reality,
                    offering immersive, interactive, and unforgettable
                    adventures.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <span className="serial-number">03</span>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="content">
                  <h4>
                    {/* <Link legacyBehavior href="/service-details"> */}
                    Game Development
                    {/* </Link> */}
                  </h4>
                  <p>
                    Create any games that revolutionise the gaming experience
                    with immersive 2D and 3D graphics, sleek gameplay.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">04</span>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="content">
                  <h4>
                    {/* <Link legacyBehavior href="/service-details"> */}
                    Smart Contracts & decentralized Blockchain based
                    applications (DApps)
                    {/* </Link> */}
                  </h4>
                  <p>
                    Blockchain technology like smart contracts remove
                    intermediaries and ensure secure and transparent
                    transactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <span className="serial-number">05</span>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="content">
                  <h4>
                    {/* <Link legacyBehavior href="/service-details"> */}
                    <a>Crypto and Token Development</a>
                    {/* </Link> */}
                  </h4>
                  <p>
                    Create your own tokenized ecosystem, our expertise ensures
                    your success in the world of digital assets and finance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">06</span>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="content">
                  <h4>
                    {/* <Link legacyBehavior href="/service-details"> */}
                    Cross-platform solutions
                    {/* </Link> */}
                  </h4>
                  <p>
                    Create versatile applications and experiences that work
                    seamlessly across different platforms, saving you time and
                    resources while reaching a broader audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <span className="serial-number">07</span>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="content">
                  <h4>
                    {/* <Link legacyBehavior href="/service-details"> */}
                    Avatar creation & customization
                    {/* </Link> */}
                  </h4>
                  <p>
                    In the metaverse, your avatar is an extension of you, use
                    advanced avatar creation tools, to personalise each detail,
                    from head to toe.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">08</span>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="content">
                  <h4>
                    {/* <Link legacyBehavior href="/service-details"> */}
                    UI/UX Prototyping and Design
                    {/* </Link> */}
                  </h4>
                  <p>
                    From creating applications with an intuitive visual
                    interface, to a custom-tailored user-friendly website, we
                    commit to your vision.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">09</span>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="content">
                  <h4>
                    {/* <Link legacyBehavior href="/service-details"> */}
                    iOS and Android Mobile Application Development
                    {/* </Link> */}
                  </h4>
                  <p>
                    Our experts formulate methods, using reliable software
                    solutions to captivate users from the moment they lay eyes
                    on your app.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">10</span>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="content">
                  <h4>
                    {/* <Link legacyBehavior href="/service-details"> */}
                    Custom Web Solutions and Responsive Designs
                    {/* </Link> */}
                  </h4>
                  <p>
                    Our procured web solutions make navigation a breeze through
                    user-friendly interfaces and responsive designs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">11</span>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                <div className="content">
                  <h4>
                    {/* <Link legacyBehavior href="/service-details"> */}
                    Branding & Website Optimization
                    {/* </Link> */}
                  </h4>
                  <p>
                    Let’s delve into your business vision to curate a brand that
                    stands apart from the competition and reflects your essence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Three Area end */}
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
      {/* Work Process Area start */}
      <section className="work-process-area pt-130 pb-100 rpt-100 rel z-1">
        <div className="container container-1290 rel z-1 ">
          <div className="row gap-70">
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two mt-60 wow fadeInDown delay-0-2s">
                <span className="step-number">Step 01</span>
                <h4 className="title">Ideation</h4>
                <div className="content">
                  <p>We start with your vision at the centrepoint.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two wow fadeInUp delay-0-2s">
                <span className="step-number">Step 02</span>
                <h4 className="title">Design</h4>
                <div className="content">
                  <p>What your application looks and feels like.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two mt-60 wow fadeInDown delay-0-2s">
                <span className="step-number">Step 03</span>
                <h4 className="title">Develop & Deploy</h4>
                <div className="content">
                  <p>
                    Create and offer dynamic products using the latest tech.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two wow fadeInUp delay-0-2s">
                <span className="step-number">Step 04</span>
                <h4 className="title">Monitor & Control</h4>
                <div className="content">
                  <p>Ongoing monitoring and optimization.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-line-shape">
            <img
              src="assets/images/shapes/work-process-line.png"
              alt="Work Process Line"
            />
          </div>
        </div>
      </section>
      {/* Work Process Area end */}
      {/* Testimonial Area start */}
      {/* <section className="testimonial-section pt-95 rpt-65 pb-130 rpb-100">
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
                        <span className="quote">“</span> From the initial
                        consultation to the final launch of my website, G&G took
                        the time to understand my business goals and target
                        audience and developed a website that is both visually
                        appealing and user-friendly.
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/team/member11.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>Aidan Clift</h4>
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
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> G&G is a leading
                        provider of expert, custom-tailored web solutions. I
                        have had the pleasure of working with them on several
                        projects, and am consistently impressed by their
                        professionalism, creativity, and expertise
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
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
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
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
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
                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-controls mt-75 rmt-40">
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
      </section> */}
      {/* Testimonial Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Services;
