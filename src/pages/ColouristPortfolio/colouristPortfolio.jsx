import { Navbar } from "../../components/Navbar";
import { ColouristProfile } from "../../components/colouristProfile";
import { ImageSliderWrapper } from "../../components/ImageSliderWrapper";
import { FooterSticky } from "../../components/FooterSticky";
import PropTypes from "prop-types";

const ColouristPortfolio = ({sidebarOpenstatus, scrollDisable}) => {
  return (
    <>
      <div className="container px-[1.8rem] md:px-[1rem] 2xl:max-w-2xl  4k:max-w-4k max-w-custom mx-auto">
        <Navbar  sidebarOpenstatus={sidebarOpenstatus} scrollDisable={scrollDisable} />
        <ColouristProfile />
        <ImageSliderWrapper />
      </div>
        <FooterSticky />
    </>
  );
};

export default ColouristPortfolio;



ColouristPortfolio.propTypes = {
  sidebarOpenstatus:PropTypes.bool,
  scrollDisable:PropTypes.any
 };
 