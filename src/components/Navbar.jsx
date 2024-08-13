import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import BgImg from "../assets/bg.png";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navItems = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Colourist Portfolio",
      to: "/colourist",
    },
    {
      label: "Designer Portfolio",
      to: "/designer",
    },
    {
      label: "Contact Me",
      to: "/contact",
    },
  ];
  return (
    <nav className="py-7 ">
      <div className="flex  flex-row items-center justify-between text-left  gap-[1.687rem]">
        <div className="text-light-gray 2xl:text-[4.688rem] 4k:text-[5.063rem] text-[1.5rem] sm:text-[1.875rem] font-bold">
          <Link to="/">Pranav Sai Das</Link>
        </div>
        <div className="space-x-4 lg:space-x-[1.688rem] 2xl:space-x-[3.688rem] 4k:space-x-[3.438rem] hidden lg:block">
          {navItems?.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                ` font-semibold text-3xl 2xl:text-[2.875rem] hover:text-light-gray 4k:text-[2.938rem] ${
                  isActive ? "text-light-gray" : "text-dark-gray"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <button
          onClick={() => setSidebarOpen((pre) => !pre)}
          className="block lg:hidden sm:px-5"
        >
          {sidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="32"
              viewBox="0 0 31 32"
              fill="none"
            >
              <path
                d="M11.6247 17.2916L6.45801 12.1249M6.45801 12.1249L11.6247 6.95825M6.45801 12.1249H20.6663C22.0366 12.1249 23.3508 12.6693 24.3197 13.6382C25.2887 14.6071 25.833 15.9213 25.833 17.2916C25.833 18.6619 25.2887 19.976 24.3197 20.945C23.3508 21.9139 22.0366 22.4583 20.6663 22.4583H19.3747"
                stroke="white"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="15"
              viewBox="0 0 31 15"
              fill="none"
            >
              <line
                x1="7.5"
                y1="1.5"
                x2="24.5"
                y2="1.5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="1.5"
                y1="7.5"
                x2="29.5"
                y2="7.5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="7.5"
                y1="13.5"
                x2="24.5"
                y2="13.5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>
      {sidebarOpen && (
        <div
          style={{
            backgroundImage: `url(${BgImg})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "calc(100vh - 94px)",
          }}
          className="absolute overflow-hidden top-[94px] left-0 right-0 bg-black z-20"
        >
          <div className="bg-overlay absolute flex flex-col items-center justify-center h-full w-full">
            <div className="flex flex-col items-center gap-3 justify-center">
              {navItems?.map(({ label, to }) => (
                <div
                  key={to}
                  className="rounded-[2.813rem]  flex items-center justify-center  h-[4.75rem] backdrop-blur-md w-[20.75rem] hover:bg-black  bg-white/15 text-[1.438rem] font-bold text-light-gray px-[2rem]"
                >
                <Link
                  onClick={() => setSidebarOpen((pre) => !pre)}
                  to={to}
                  className="w-full text-center"
                >
                  {label}
                </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export { Navbar };
