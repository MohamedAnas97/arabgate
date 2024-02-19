import ContactForm1 from "./ContactForm1";
const ContactFooter = () => {
  return (
    <section className="drop-me-area">
      <div className="container container-1290">
        <div className="row align-items-center justify-content-center justify-content-lg-between mb-40">
          <div className="col-lg-5">
            <div className="our-location-part rmb-55 wow fadeInUp delay-0-2s">
              <div className="row">
                <div className="col-xl-10">
                  <div className="section-title mb-20">
                    <span className="text-color ">Just shout us out!</span>
                    {/* <h2 className="py-20">
                        Let's be partners in digital transformation
                      </h2> */}
                    <div className="footer-contact-info wow fadeInUp delay-0-3s animated">
                      <h5 className="text-color">
                        Still got questions? Drop us an email at:{" "}
                      </h5>
                      <div className="our-location-address">
                        <a
                          className="callto text-color"
                          href="mailto:agarabgate@gmail.com"
                        >
                          <i className="fas fa-envelope" />
                          agarabgate@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gap-80 pb-30">
                <div className="col-sm-12">
                  <div className="our-location-address mb-20">
                    <h5 className="text-color">DUBAI, UAE</h5>
                    <p className="text-color">
                      ARAB GATE Technical Services LLC, B Block 104, Al Shaali
                      Building, Damascus Street, Al Qusais
                    </p>

                    <a
                      className="callto text-color"
                      href="callto:+971-04-3349500"
                    >
                      <i className="fas fa-phone-alt" /> +971 585443090 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="drop-me-form-part rmb-lg-50 rmb-30 wow fadeInLeft delay-0-2s contact-background">
              <ContactForm1 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactFooter;
