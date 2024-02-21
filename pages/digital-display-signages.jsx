import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import { sliderProps } from "@/src/sliderProps";
import ContactLayout from "@/src/components/contactFooter";
import { Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
const DigitalDisplay = () => {
  const accordionData = [
    {
      id: 1,
      title: " What types of electrical services do you offer?",
      content:
        "We offer a wide range of electrical services, including installation, repair, maintenance, and upgrades for residential, commercial, and industrial properties.",
    },
    {
      id: 2,
      title: "Are your electricians licensed and insured?",
      content:
        "Yes, all our electricians are fully licensed, insured, and highly trained professionals with extensive experience in the field. You can trust us to handle your electrical needs safely and efficiently.",
    },
    {
      id: 3,
      title:
        "How do you ensure electrical safety during installations and repairs?",
      content:
        "Safety is our top priority. We strictly adhere to all electrical codes and regulations, use proper safety equipment, and follow industry best practices to ensure the safety of our clients and their properties.",
    },
    {
      id: 4,
      title: "Do you offer emergency electrical services?",
      content:
        "Yes, we understand that electrical emergencies can happen at any time. That's why we offer 24/7 emergency electrical services to address urgent issues promptly and minimize disruption to your home or business.",
    },
    {
      id: 5,
      title:
        "Can you help with energy-efficient lighting solutions or electrical upgrades?",
      content:
        "Absolutely! We specialize in energy-efficient lighting solutions and can recommend and install LED lighting, smart lighting controls, and other energy-saving technologies to help you reduce your energy consumption and save on utility bills.",
    },
    {
      id: 6,
      title: "How do you handle electrical inspections and code compliance?",
      content:
        "We conduct thorough electrical inspections to identify any issues and ensure compliance with local electrical codes and regulations. If any deficiencies are found, we provide recommendations and solutions to bring your electrical system up to code.",
    },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"Digital Display & Signages"} />
      {/* Page Banner End */}

      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-12 mt-30">
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font">
              We can install any type of digital displays customized for your
              business needs. We have partnered with the best in the industry to
              provide you with displays with high refresh rates, high pixels to
              fine pixel pitch and longer LED lifetimes.
            </h5>
          </div>
          <div className="about-content wow fadeInUp delay-0-4s">
            <div className="section-title pt-20">
              <h4 className="text-color font-fam h4-font">Indoor Displays</h4>
            </div>
            <div className="content">
              <ul className="list-style-three ">
                <li className="text-color font-fam h5-font">
                  Our full-color indoor LED solutions are sources from the best
                  to display vibrant content that is guaranteed to turn heads.
                </li>
                <li className="text-color font-fam h5-font">
                  Our solutions include information displays, pylons, large
                  in-store marketing displays and more, all which help to engage
                  customer interest, sell and create an impact in today’s busy
                  consumer environments.
                </li>
              </ul>
            </div>
          </div>
          <div className="about-content wow fadeInUp delay-0-4s">
            <div className="section-title pt-20">
              <h4 className="text-color font-fam h4-font">Outdoor Displays</h4>
            </div>
            <div className="content">
              <ul className="list-style-three ">
                <li className="text-color font-fam h5-font">
                  Built to withstand extreme climate conditions of GCC, our
                  outdoor LED screens provide the perfect viewing solutions for
                  large areas and arenas.
                </li>
                <li className="text-color font-fam h5-font">
                  Captivate the electrifying energy of a stadium on large
                  multi-screens or provide high-definition displays to infuse
                  life into live concerts and shows.
                </li>
              </ul>
            </div>
          </div>
          <div className="about-content wow fadeInUp delay-0-4s">
            <div className="section-title pt-20">
              <h4 className="text-color font-fam h4-font">
                Interactive Screens for Schools and Business
              </h4>
            </div>
            <div className="content">
              <ul className="list-style-three ">
                <li className="text-color font-fam h5-font">
                  Classrooms and workplaces are getting smarter, quicker-paced
                  and more efficient.
                </li>
                <li className="text-color font-fam h5-font">
                  We have partnered with top-notch global solutions providers to
                  design products for schools, universities and other education
                  providers, as well as for other progressive businesses across
                  the UAE.
                </li>
              </ul>
            </div>
          </div>
          <div className="about-content wow fadeInUp delay-0-4s">
            <div className="section-title pt-20">
              <h4 className="text-color font-fam h4-font">
                Digital Signage Software
              </h4>
            </div>
            <div className="content">
              <ul className="list-style-three ">
                <li className="text-color font-fam h5-font">
                  Classrooms and workplaces are getting smarter, quicker-paced
                  and more efficient.
                </li>
                <li className="text-color font-fam h5-font">
                  We have partnered with top-notch global solutions providers to
                  design products for schools, universities and other education
                  providers, as well as for other progressive businesses across
                  the UAE.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="work-gallery-area py-80 rpy-80">
        <div className="container">
          <Swiper
            {...sliderProps.galleryFiveActive}
            className="gallery-five-active"
          >
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/sig1.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/arab2/sig2.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/arab2/sig3.jpg" alt="" />
                </div>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-8s">
                <div className="image">
                  <img src="assets/images/arab2/sig4.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/sig5.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/sig6.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/sig7.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="project-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/arab2/sig8.jpg" alt="" />
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
export default DigitalDisplay;
