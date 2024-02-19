import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Blog = () => {
  return (
    <Layout>
      {/* Page Banner Start */}
      {/* <PageBanner pageName={"Latest Tech & Trends"} /> */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <h1 className="hero-title style-two mb-50 rmb-50 wow fadeInUp delay-0-2s text-center w-full">
                Latest <br /> Tech & Trends
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                />
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
      {/* Blog Page Area start */}
      <section className="blog-page-area py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/ai.png" alt="Blog" />
                </div>
                {/* <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul> */}
                <hr />
                <h4>
                  {/* <Link legacyBehavior href="/blog-details">
                    <a> */}
                  Artificial Intelligence: Where is the Driving Force of
                  Technology taking us?
                  {/* </a>
                  </Link> */}
                </h4>
                {/*                  <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/wf.png" alt="Blog" />
                </div>
                {/* <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul> */}
                <hr />
                <h4>
                  {/* <Link legacyBehavior href="/blog-details"> */}
                  {/* <a> */}
                  Web 3.0: Is the Future Already Here? A Closer Look
                  {/* </a> */}
                  {/* </Link> */}
                </h4>
                {/* <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/blog/ba.png" alt="Blog" />
                </div>
                {/* <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul> */}
                <hr />
                <h4>
                  {/* <Link legacyBehavior href="/blog-details">
                    <a> */}
                  Building an Avatar: Everything You’ll Need to Deep Dive into
                  The Metaverse
                  {/* </a>
                  </Link> */}
                </h4>
                {/* <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/arvr.png" alt="Blog" />
                </div>
                {/* <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul> */}
                <hr />
                <h4>
                  {/* <Link legacyBehavior href="/blog-details">
                    <a> */}
                  AR and VR: The Future of E-commerce, Education and
                  E-governance
                  {/* </a>
                  </Link> */}
                </h4>
                {/* <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/wb.png" alt="Blog" />
                </div>
                {/* <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul> */}
                <hr />
                <h4>
                  {/* <Link legacyBehavior href="/blog-details">
                    <a> */}
                  Web3.0 & Blockchain Integration: The Pathway to a
                  Decentralised Web
                  {/* </a>
                  </Link> */}
                </h4>
                {/* <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/blog/VS.png" alt="Blog" />
                </div>
                {/* <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul> */}
                <hr />
                <h4>
                  {/* <Link legacyBehavior href="/blog-details">
                    <a> */}
                  Voice Skills For Google Assistant And Amazon Alexa
                  {/* </a>
                  </Link> */}
                </h4>
                {/* <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/blog/co.png" alt="Blog" />
                </div>
                {/* <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul> */}
                <hr />
                <h4>
                  {/* <Link legacyBehavior href="/blog-details">
                    <a> */}
                  Creating Online Environments The Work Well For Older User
                  {/* </a>
                  </Link> */}
                </h4>
                {/* <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/ID.png" alt="Blog" />
                </div>
                {/* <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul> */}
                <hr />
                <h4>
                  {/* <Link legacyBehavior href="/blog-details">
                    <a> */}
                  Inclusive Design And Accessibility Live Stream Heydon
                  Pickering
                  {/* </a>
                  </Link> */}
                </h4>
                {/* <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/TC.png" alt="Blog" />
                </div>
                {/* <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul> */}
                <hr />
                <h4>
                  {/* <Link legacyBehavior href="/blog-details">
                    <a> */}
                  Tips Conducting Usability Studies With Participants
                  Disabilities
                  {/* </a>
                  </Link> */}
                </h4>
                {/* <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link> */}
              </div>
            </div>

            {/* <div className="col-lg-12">
              <ul className="pagination mt-10 flex-wrap justify-content-center wow fadeInUp delay-0-2s">
                <li className="page-item disabled">
                  <span className="page-link">
                    <i className="fas fa-angle-left" />
                  </span>
                </li>
                <li className="page-item active">
                  <span className="page-link">
                    01
                    <span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    04
                  </a>
                </li>
                <li className="page-item dot" />
                <li className="page-item dot" />
                <li className="page-item dot" />
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fas fa-angle-right" />
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
      {/* Blog Page Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Blog;
