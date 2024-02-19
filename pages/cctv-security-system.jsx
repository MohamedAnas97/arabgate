import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import YgencyAccordion from "@/src/components/YgencyAccordion";
// import Link from "next/link";
import { sliderProps } from "@/src/sliderProps";
import ContactLayout from "@/src/components/contactFooter";
// import { Nav, Tab } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm1 from "@/src/components/ContactForm1";
import { useState } from "react";
const CctvService = () => {
  const accordionData = [
    {
      id: 1,
      title: "How do we assess the quality of the company's work?",
      content:
        "There are a number of ways through which our work can be verified and assessed, you can do a thorough portfolio examination, check our testimonials and client references, check our reviews and ratings online, inquire about our     team’s technical expertise and certifications, check out our communication and     project management practices and policies, inquire about our post-launch     support and maintenance policies and most of all learn more about us and our     knack for innovation and future-readiness",
    },
    {
      id: 2,
      title:
        " What makes your company unique in the software development industry?",
      content:
        "With unparalleled technical expertise, our team of skilled developers, designers,  and strategists have diverse industry experience. We understand your unique business requirements and create tailored software solutions aligned with your  goals.",
    },
    {
      id: 3,
      title: "How do you handle project timelines and deadlines?",
      content:
        "Through clear communication between team members, using project management tools and tracking progress and making adjustments through rigorous testing.",
    },
    {
      id: 4,
      title:
        "	What is Agile methodology, and do you follow it in your projects?",
      content:
        "Agile methodology is a form of project management which prioritises cross-functional collaboration and continuous improvement by dividing projects into smaller parts and phases which helps teams evaluate projects constantly and detect errors as well as plan and execute them effectively.",
    },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={" CCTV Security Systems "} />
      {/* Page Banner End */}

      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-12 mt-30">
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font">
              We offer diverse range of services to establish security in your
              property through tried and tested surveillance systems.
            </h5>
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font">
              CCTV surveillance systems is the most important technology that
              ensures impeccable security and safety to the residence in Dubai.
            </h5>
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font">
              The evidences collected through CCTV cameras helps the
              authorities, security and business owners to uncover the details
              of a specific incident.
            </h5>
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font">
              Cameras with an intrusion alarm provides shops and business
              environments much needed security.
            </h5>
          </div>
          <div className="about-content wow fadeInUp delay-0-4s">
            <div className="section-title pt-20">
              {/* <span className="sub-title mb-15">What We Do</span> */}
              <h4 className="text-color font-fam h4-font">
              Our Services Includes :
              </h4>
            </div>
            <div className="content">
              <ul className="list-style-three ">
                <li className="text-color font-fam h5-font">
                Wireless and wired CCTV Cameras
                </li>
                <li className="text-color font-fam h5-font">
                Digital video recorders (DVRs)
                </li>
                <li className="text-color font-fam h5-font">
                Dome Cameras
                </li>
                <li className="text-color font-fam h5-font">
                Bullet cameras
                </li>
                <li className="text-color font-fam h5-font">
                Pin Hole Cameras
                </li>
                <li className="text-color font-fam h5-font">
                Box cameras
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Area start */}
      <section className="work-gallery-area py-80 rpy-80">
        {/* <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Recent Works Gallery</span>
                <h2>We’ve Complete 1532+ Projects Take A Look Our Work</h2>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container">
          <Swiper
            {...sliderProps.galleryFiveActive}
            className="gallery-five-active"
          >
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/cc1.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/arab2/cc2.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/arab2/cc3.jpg" alt="" />
                </div>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-8s">
                <div className="image">
                  <img src="assets/images/arab2/cc4.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/cc10.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/cc6.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/cc5.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/cc8.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="work-gallery-controls">
            <button className="work-gallery-prev slick-arrow">
              <i className="far fa-chevron-left" />
            </button>
            <div className="work-gallery-dots slick-dots" />
            <button className="work-gallery-next slick-arrow">
              <i className="far fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>
      <section className="faq-area pt-20 rpt-0 pb-130 rpb-120 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="faq-content-part rmb-55 wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <h2>Frequently Asked Question</h2>
                </div>
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="faq-accordion-two"
                >
                  {accordionData.map((data, i) => (
                    <YgencyAccordion
                      title={data.title}
                      key={data.id}
                      content={data.content}
                      event={`collapse${i}`}
                      onClick={() =>
                        setActive(
                          active == `collapse${i}` ? "" : `collapse${i}`
                        )
                      }
                      active={active}
                    />
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="faq-four-iamge wow fadeInLeft delay-0-2s">
                <img src="assets/images/arab/person.png" alt="FAQs" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <ContactLayout />
      </div>
    </Layout>
  );
};
export default CctvService;
