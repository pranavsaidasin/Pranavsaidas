import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { DesignerPortfolio } from "./pages/designerPortfolio/designerPortfolio";
import ColouristPortfolio from "./pages/ColouristPortfolio/colouristPortfolio";
import BgImg from "./assets/bg.png";
import { Contact } from "./pages/Contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      <div className="bg-overlay absolute min-h-screen w-full">
        <ToastContainer />
        <Routes location={location}>
          <Route
            path="/"
            element={
              <Home
                sidebarOpenstatus={sidebarOpen}
                scrollDisable={setSidebarOpen}
              />
            }
          />
          <Route
            path="/designer"
            element={
              <DesignerPortfolio
                sidebarOpenstatus={sidebarOpen}
                scrollDisable={setSidebarOpen}
              />
            }
          />
          <Route
            path="/colourist"
            element={
              <ColouristPortfolio
                sidebarOpenstatus={sidebarOpen}
                scrollDisable={setSidebarOpen}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                sidebarOpenstatus={sidebarOpen}
                scrollDisable={setSidebarOpen}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
