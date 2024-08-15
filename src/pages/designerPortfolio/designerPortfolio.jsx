import { Navbar } from "../../components/Navbar";
import { FooterSticky } from "../../components/FooterSticky";
import { DesignerProfile } from "../../components/designerProfile";
import { PhotoContainer } from "../../components/photoContainer";
import PropTypes from "prop-types";

export const DesignerPortfolio = ({sidebarOpenstatus, scrollDisable}) => {
  return (
    <>
      <div className="container px-[1.8rem] md:px-[1rem]  4k:max-w-4k 2xl:max-w-2xl max-w-custom mx-auto">
        <Navbar sidebarOpenstatus={sidebarOpenstatus} scrollDisable={scrollDisable} />
        <DesignerProfile/>
        <PhotoContainer/>
      </div>
      <FooterSticky />
    </>
  );
};



DesignerPortfolio.propTypes = {
  sidebarOpenstatus:PropTypes.bool,
  scrollDisable:PropTypes.any
 };
 