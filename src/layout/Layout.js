import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation, sidebarClick } from "../utils";
import ScrollTop from "./ScrollTop";
import Whatsapp from "./Whatsapp";
import Footer from "./footer/Footer3";
import Header from "./header/Header";
import SideBar from "./header/SideBar";
const Layout = ({ children, header, footer3, singleMenu }) => {
  useEffect(() => {
    niceSelect();
    animation();
    sidebarClick();
  }, []);
  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        <Header header={header} singleMenu={singleMenu} />
        <SideBar />
        {children}
        <Footer footer={footer3} />
        <ScrollTop />
        <Whatsapp />
      </div>
    </Fragment>
  );
};
export default Layout;
