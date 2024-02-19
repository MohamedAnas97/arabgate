import { useState } from "react";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { isValidEmail } from "@/utils/emailValidation";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Contact = () => {
  // state to get data from user
  const [userDataValidation, setUserDataValidation] = useState({
    name: false,
    email: false,
    phone_number: false,
    country: false,
    message: false,
  });
  // state to get data from user
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    country_code: "-",
    phone_number: "",
    country: "",
    message: "",
  });
  // state for loader
  const [loader, setLoader] = useState(false);
  const createNotification = (type) => {
    switch (type) {
      case "info":
        NotificationManager.info("Info message");
        break;
      case "success":
        NotificationManager.success("Success", "Your Message Send Succesfully");
        break;
      case "warning":
        NotificationManager.warning(
          "Warning message",
          "Close after 3000ms",
          3000
        );
        break;
      case "error":
        NotificationManager.error("Error", "", 5000);
        break;
    }
  };
  // handler to update the state data
  const changeDataHadnler = (key, value) => {
    let duplicate = { ...userData };
    duplicate[key] = value;
    setUserData(duplicate);
  };
  // handler to update the state data
  const validationHandler = (key, value) => {
    let duplicate = { ...userDataValidation };
    duplicate[key] = value;
    setUserDataValidation(duplicate);
  };
  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    setLoader(true);
    let duplicate = { ...userDataValidation };
    // error handler conditions
    if (
      !userData?.name ||
      !userData?.email ||
      isValidEmail(userData?.email) === false ||
      !userData?.phone_number ||
      !userData?.country ||
      !userData?.message
    ) {
      if (!userData?.name) {
        duplicate.name = true;
        setUserDataValidation(duplicate);
      }
      if (!userData?.email) {
        duplicate.email = true;
        setUserDataValidation(duplicate);
      }
      if (isValidEmail(userData?.email) === false && userData?.email !== "") {
        duplicate.email = "Enter valid email";
        setUserDataValidation(duplicate);
      }
      if (!userData?.country) {
        duplicate.country = true;
        setUserDataValidation(duplicate);
      }
      if (!userData?.phone_number) {
        duplicate.phone_number = true;
        setUserDataValidation(duplicate);
      }
      if (!userData?.country) {
        duplicate.country = true;
        setUserDataValidation(duplicate);
      }
      if (!userData?.message) {
        duplicate.message = true;
        setUserDataValidation(duplicate);
      }
      setLoader(false);
    }

    // success scenario
    else {
      axios
        .post("https://gng-api.gngtest.site/api/contact", userData)
        .then(() => {
          createNotification("success");
          setLoader(false);
          setUserData({
            name: "",
            email: "",
            country_code: "",
            phone_number: "",
            country: "",
            message: "",
          });
        })
        .catch(() => {
          createNotification("error");
          setLoader(false);
        });
    }
  };
  return (
    <Layout>
      {/* Page Banner Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <NotificationContainer />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <h1 className="hero-title style-two mb-50 rmb-50 wow fadeInUp delay-0-2s text-center w-full">
                Contact Us
                {/* <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                /> */}
              </h1>
              {/* <p className="fadeInUp delay-0-2s wow">
                Our track record speaks for itself. Take a look at the
                remarkable products we've co-created with our valued partners.
                Join us and let's build something great together.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* Contact Form Area start */}
      <section className="contact-page-area py-130 rpy-100 rel">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="our-location-part rmb-55 wow fadeInUp delay-0-2s">
                <div className="row">
                  <div className="col-xl-10">
                    <div className="section-title mb-40">
                      <span className="sub-title ">Just shout us out!</span>
                      <h2 className="py-20">
                        Let's be partners in digital transformation
                      </h2>
                      <div className="footer-contact-info wow fadeInUp delay-0-3s animated">
                        <h5>Still got questions? Drop us an email at: </h5>
                        <div className="our-location-address">
                          <a
                            className="callto"
                            href="mailto:info@gnginfotech.com"
                          >
                            <i className="fas fa-envelope" />
                            info@gnginfotech.com
                          </a>
                        </div>
                        <h5 className="mt-10">
                          Interested in joining the A-team?:{" "}
                        </h5>
                        <div className="our-location-address">
                          <a
                            className="callto"
                            href="mailto:careers@gnginnovations.com"
                          >
                            <i className="fas fa-envelope" />{" "}
                            careers@gnginnovations.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gap-80 pb-30">
                  <div className="col-sm-6">
                    <div className="our-location-address mb-40">
                      <h5> HQ - DUBAI, UAE</h5>
                      <p>
                        1113, G&G INNOVATIONS INFORMATION TECHNOLOGY L.L.C,
                        Grosvenor Business Tower, Barsha Heights - Dubai, UAE
                      </p>
                      {/* <a className="mailto" href="mailto:support@gmail.com">
                        info@gnginfotech.com
                      </a> */}
                      {/* <br /> */}
                      <a className="callto" href="callto:+971-04-3349500">
                        <i className="fas fa-phone" /> +971-04-3349500
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="our-location-address mb-40">
                      <h5>NEW DELHI, INDIA</h5>
                      <p>1-A Prithviraj Lane, Khan Market, New Delhi, Indian Office</p>
                      <br />
                      <a className="callto" href="callto:+91 74280 55541">
                        <i className="fas fa-phone" />
                        +91-7428055541
                      </a>
                    </div>
                  </div>
                </div>
                <h4>Follow Us</h4>
                <div className="social-style-two pt-15">
                  <a
                    href="https://www.facebook.com/profile.php?id=100091663875681"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/g-g-innovations/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="https://www.instagram.com/gnginnovations/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <p
                    className="a-icon cursor"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/channel/UCZ8YJt8gCmvVIt7-IZtRevQ/"
                      )
                    }
                  >
                    <i className="fab fa-youtube" />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-page-form form-style-one wow fadeInUp delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-15">contact Us</span>
                  <h3>For Project Inquiries</h3>
                </div>
                <form
                  className="contactForm"
                  name="contactForm"
                  onSubmit={(e) => submitHandler(e)}
                >
                  <div className="row gap-60 pt-15">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="name">
                          <i className="far fa-user" />
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Full Name"
                          value={userData.name}
                          onChange={(e) => {
                            changeDataHadnler("name", e.target.value);
                            validationHandler("name", false);
                          }}
                        />
                        <div className="help-block with-errors" />{" "}
                        {/* error-message */}
                        <div>
                          <p className="error-meg-contact  wow fadeInUp delay-0-2s">
                            {userDataValidation?.name &&
                              "Please enter your name"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email">
                          <i className="far fa-envelope" />
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                          value={userData.email}
                          onChange={(e) => {
                            changeDataHadnler("email", e.target.value);
                            validationHandler("email", false);
                          }}
                        />
                        <div className="help-block with-errors" />
                        {/* error-message */}
                        <div>
                          <p className="error-meg-contact wow fadeInUp delay-0-2s">
                            {userDataValidation?.email === true &&
                              "Please enter your email"}
                            {userDataValidation?.email ===
                              "Enter valid email" && "Enter valid email"}
                          </p>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="phone_number">
                          <i className="far fa-phone" />
                        </label>
                        <input
                          type="number"
                          name="phone_number"
                          className="form-control"
                          placeholder="Phone"
                          value={userData.phone_number}
                          onChange={(e) => {
                            changeDataHadnler("phone_number", e.target.value);
                            validationHandler("phone_number", false);
                          }}
                        />
                        <div className="help-block with-errors" />
                        {/* error-message */}
                        <div>
                          <p className="error-meg-contact  wow fadeInUp delay-0-2s">
                            {userDataValidation?.phone_number &&
                              "Please enter your number"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="phone_number">
                          <i className="far fa-flag" />
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          className="form-control"
                          placeholder="Country"
                          value={userData.country}
                          onChange={(e) => {
                            changeDataHadnler("country", e.target.value);
                            validationHandler("country", false);
                          }}
                        />
                        <div className="help-block with-errors" />
                        {/* error-message */}
                        <div>
                          <p className="error-meg-contact  wow fadeInUp delay-0-2s">
                            {userDataValidation?.country &&
                              "Please enter country name"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">
                          <i className="far fa-pencil" />
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={2}
                          placeholder="Message"
                          onChange={(e) => {
                            changeDataHadnler("message", e.target.value);
                            validationHandler("message", false);
                          }}
                          value={userData?.message}
                        />
                        <div className="help-block with-errors" />
                        {/* error-message */}
                        <div>
                          <p className="error-meg-contact  wow fadeInUp delay-0-2s">
                            {userDataValidation?.message &&
                              "Please enter your message"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        <button
                          type="submit"
                          className="theme-btn style-two w-100"
                        >
                          {loader ? (
                            "...wait"
                          ) : (
                            <span>
                              Send Message <i className="far fa-arrow-right" />
                            </span>
                          )}
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map mb-120 rpb-90 wow fadeInUp delay-0-2s">
        <div className="container-fluid">
          <div className="our-location">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Grosvenor%20Business%20Tower+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      {/* Location Map Area End */}
      {/* footer area start */}
    </Layout>
  );
};
export default Contact;
