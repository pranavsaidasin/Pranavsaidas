import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { DesignerPortfolio } from "./pages/designerPortfolio/designerPortfolio";
import ColouristPortfolio from "./pages/ColouristPortfolio/colouristPortfolio";
import BgImg from "./assets/bg.png";
import { Contact } from "./pages/Contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "./components/Navbar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const parentRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (parentRef.current) {
      setParentWidth(parentRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (parentRef.current) {
        setParentWidth(parentRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        overflowY: sidebarOpen ? "hidden" : "scroll",
        position: "relative",
      }}
    >
      <div className="bg-overlay  min-h-screen w-full" ref={parentRef}>
        <div
          className={`fixed z-10`}
          style={{
            backgroundImage: `url(${BgImg})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: `${parentWidth}px`,
          }}
        >
          <div className="bg-overlay w-full">
            <Navbar
              sidebarOpenstatus={sidebarOpen}
              scrollDisable={setSidebarOpen}
            />
          </div>
        </div>
        <div className=" 2xl:pt-[9.438rem] 4k:pt-[9.875] pt-[5.875rem] ">
          <ToastContainer />
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/designer" element={<DesignerPortfolio />} />
            <Route path="/colourist" element={<ColouristPortfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
