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
const AcMaintenance = () => {
  const accordionData = [
    {
      id: 1,
      title: "What HVAC and AC maintenance services do you offer?",
      content:
        "We offer comprehensive HVAC and AC maintenance services, including regular inspections, cleaning, lubrication, filter replacement, and performance testing to ensure optimal functionality and efficiency of your heating and cooling systems.",
    },
    {
      id: 2,
      title:
        "How often should I schedule maintenance for my HVAC and AC systems?",
      content:
        " It's recommended to schedule maintenance for your HVAC and AC systems at least once a year. Regular maintenance helps prevent breakdowns, extends the lifespan of your equipment, and ensures efficient operation throughout the year.",
    },
    {
      id: 3,
      title: " Do you offer emergency HVAC and AC repair services?",
      content:
        "Yes, we understand that HVAC and AC emergencies can occur unexpectedly. That's why we offer 24/7 emergency repair services to address urgent issues promptly and restore comfort to your home or business.",
    },
    {
      id: 4,
      title:
        "What are the signs that my HVAC or AC system needs repair?",
      content:
        "Signs that your HVAC or AC system may need repair include strange noises, reduced airflow, uneven cooling or heating, frequent cycling, and unusually high energy bills. If you notice any of these signs, it's best to have a professional technician inspect your system.",
    },
    {
      id: 5,
      title: "How do you ensure the quality of your HVAC and AC repair services?",
      content:
        "Our team of experienced technicians undergoes regular training and stays updated on the latest HVAC and AC repair techniques and technologies. We use advanced diagnostic tools and high-quality replacement parts to ensure lasting repairs and customer satisfaction.",
    },
    {
      id: 6,
      title:
        "Can you help me improve the energy efficiency of my HVAC and AC systems?",
      content:
        "Absolutely! As part of our maintenance and repair services, we can assess the energy efficiency of your HVAC and AC systems and provide recommendations for improvements, such as upgrading to energy-efficient equipment or optimizing system settings to reduce energy consumption and lower utility bills.",
    },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"AC Maintenance and Repair "} />
      {/* Page Banner End */}

      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-12 mt-30">
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font">
              We understand the importance of a well-functioning air
              conditioning system, especially during the scorching heat.
            </h5>
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font">
              Our team of skilled technicians is dedicated to providing
              comprehensive AC maintenance and repair services to ensure your
              system operates efficiently, providing you with a cool and
              comfortable environment year-round.
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
                  Diagnosis and Troubleshooting
                </li>
                <li className="text-color font-fam h5-font">
                  Regular Inspections
                </li>
                <li className="text-color font-fam h5-font">
                  Cleaning and Air Filter Replacement
                </li>
                <li className="text-color font-fam h5-font">
                  Refrigerant Check
                </li>
                <li className="text-color font-fam h5-font">
                  Complete HVAC Maintenance and Service
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
                  <img src="assets/images/arab2/ac10.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/arab2/ac2.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/arab2/ac3.jpg" alt="" />
                </div>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-8s">
                <div className="image">
                  <img src="assets/images/arab2/ac4.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/ac5.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/ac6.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/ac7.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/ac9.jpg" alt="" />
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
              <div className="faq-four-iamge2 wow fadeInLeft delay-0-2s">
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
export default AcMaintenance;
