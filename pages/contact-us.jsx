import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import ContactLayout from "@/src/components/contactFooter";
const contactDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Contact Us"} />
      <div className="mt-80 rmt-40 mb-80 rmb-40">
        <ContactLayout />
      </div>
      <div className="contact-page-map mb-70 rmb-20 rpb-40 wow fadeInUp delay-0-2s">
        <div className="container container-1290">
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
    </Layout>
  );
};
export default contactDetails;
