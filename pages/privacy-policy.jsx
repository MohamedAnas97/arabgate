import Layout from "@/src/layout/Layout";
const PrivacyPolicy = () => {
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
                Privacy Policy
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                />
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="page-banner  pb-45 rpb-50 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-item blog-standard wow fadeInUp delay-0-2s">
                {/* sub heading */}
                <p>
                  At G&G Innovations, we are committed to protecting the privacy
                  and security of your personal information. This Privacy Policy
                  outlines how we collect, use, disclose, and safeguard the
                  personal information we obtain through our website and other
                  channels. By using our services and providing us with your
                  personal information, you consent to the practices described
                  in this Privacy Policy.
                </p>
                {/* Information We Collect */}
                <div>
                  <h3>1. Information We Collect</h3>
                  <p>
                    1.1. Personal Information: We may collect personal
                    information, such as your name, email address, phone number,
                    and other contact details when you voluntarily provide it to
                    us through our website, emails, or other means.
                  </p>
                  <p>
                    1.2. Usage Data: We may collect information about your use
                    of our website, including your IP address, browser type,
                    operating system, referring URLs, pages visited, and other
                    similar information.
                  </p>
                </div>
                {/* Use of Information */}
                <div>
                  <h3>2. Use of Information</h3>
                  <p>
                    2.1. We may use the information we collect for the following
                    purposes:
                  </p>
                  <p>
                    <ul className="dot-content">
                      <li>
                        To provide and maintain our services, including customer
                        support.
                      </li>
                      <li>
                        To improve and personalize your experience on our
                        website.
                      </li>
                      <li>
                        To understand and analyze how users interact with our
                        website.
                      </li>
                      <li>
                        To protect against fraud, unauthorized transactions, or
                        any other illegal activities.
                      </li>
                      <li>
                        To comply with legal obligations and enforce our
                        policies.
                      </li>
                    </ul>
                  </p>
                  <p>
                    2.2. We may also use the information in aggregated and
                    anonymized form for research, statistical analysis, and
                    other legitimate business purposes.
                  </p>
                </div>
                {/* Information Sharing */}
                <div>
                  <h3>3. Information Sharing</h3>
                  <p>
                    3.1. We may share your personal information with third
                    parties in the following circumstances:
                  </p>
                  <p>
                    <ul className="dot-content">
                      <li>With your consent or at your direction.</li>
                      <li>
                        With service providers who assist us in operating our
                        business and providing services to you.
                      </li>
                      <li>
                        With law enforcement, government authorities, or other
                        third parties if required by applicable laws,
                        regulations, court orders, or legal processes.
                      </li>
                      <li>
                        To protect and defend our rights, property, or safety,
                        and those of our users or others.
                      </li>
                    </ul>
                  </p>
                  <p>
                    3.2. We do not sell or rent your personal information to
                    third parties for their marketing purposes.
                  </p>
                </div>
                {/* Data Security */}
                <div>
                  <h3>4. Data Security</h3>
                  <p>
                    4.1. We implement appropriate technical and organizational
                    measures to protect your personal information from
                    unauthorized access, disclosure, alteration, or destruction.
                  </p>
                  <p>
                    4.2. Despite our efforts, no method of transmission over the
                    internet or electronic storage is completely secure.
                    Therefore, we cannot guarantee absolute security of your
                    personal information.
                  </p>
                </div>
                <div>
                  <h3>5. International Data Transfer</h3>
                  <p>
                    5.1. Your personal information may be transferred to and
                    stored on servers located outside your country or the
                    country where you provided the information. These countries
                    may have different data protection laws than your own.
                  </p>
                  <p>
                    5.2. By using our services or providing us with your
                    personal information, you consent to the transfer of your
                    information to countries outside your country of residence.
                  </p>
                </div>
                <div>
                  <h3>6. Your Choices and Rights</h3>
                  <p>
                    6.1. You have the right to access, update, correct, or
                    delete your personal information. You may also object to or
                    restrict certain processing of your information. To exercise
                    these rights, please contact us using the information
                    provided in Section 8.
                  </p>
                  <p>
                    6.2. We will make reasonable efforts to fulfill your
                    request, subject to any legal or contractual restrictions.
                  </p>
                </div>
                <div>
                  <h3>7. Children's Privacy</h3>
                  <p>
                    7.1. Our services are not intended for individuals under the
                    age of 16. We do not knowingly collect personal information
                    from children without parental consent. If you believe we
                    may have collected information from a child without
                    appropriate consent, please contact us.
                  </p>
                </div>
                <div>
                  <h3>8. Contact Us</h3>
                  <p>
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or our privacy practices, please contact
                    us at: <br /> G&G Innovations <br />
                    Address: 1113, G&G INNOVATIONS INFORMATION TECHNOLOGY L.L.C,
                    Grosvenor Business Tower, Barsha Heights - Dubai, UAE <br />
                    Email: info@gnginfotech.com <br />
                    Phone: +971-04-3349500
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default PrivacyPolicy;
