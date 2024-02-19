import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import YgencyAccordion from "@/src/components/YgencyAccordion";
// import Link from "next/link";
import { sliderProps } from "@/src/sliderProps";
import ContactLayout from "@/src/components/contactFooter";
// import { Nav, Tab } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
const ProductDetails = () => {
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
      <PageBanner pageName={"Interior Fit-out and Renovation"} />
      {/* Page Banner End */}

      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-12 mt-30">
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font">
              We your space a fresh and modern look with our comprehensive
              interior fit-out solutions. From concept to completion, we handle
              every aspect of the project, ensuring a seamless and efficient
              process . High-quality renovations for kitchens, bathrooms,
              commercial spaces and residences.
            </h5>
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font">
              Revitalize and update your existing space with our renovation
              services. Our team is dedicated to delivering high-quality
              renovations that not only enhance the aesthetics but also improve
              functionality and energy efficiency.
            </h5>

            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font">
              We your space a fresh and modern look with our comprehensive
              interior fit-out solutions. From concept to completion, we handle
              every aspect of the project, ensuring a seamless and efficient
              process . High-quality renovations for kitchens, bathrooms,
              commercial spaces and residences.
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
              <ul className="list-style-three pt-15 ">
                <li className="text-color font-fam h5-font">
                  Retail Fit-Outs for Customer Appeal
                </li>
                <li className="text-color font-fam h5-font">Residential Fit-Outs for Comfort</li>
                <li className="text-color font-fam h5-font">
                Kitchen and Bath Renovations
                </li>
                <li className="text-color font-fam h5-font">
                Gypsum partitions for Offices and Residence
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Area start */}
      <section className="work-gallery-area py-80 rpy-80">
        <div className="container">
          <Swiper
            {...sliderProps.galleryFiveActive}
            className="gallery-five-active"
          >
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/int1.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/arab/int2.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/arab/int3.jpg" alt="" />
                </div>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-8s">
                <div className="image">
                  <img src="assets/images/arab/int4.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/int5.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/int6.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/int7.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab/int8.jpg" alt="" />
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
export default ProductDetails;
