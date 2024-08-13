import React from "react";
import PropTypes from "prop-types";

export const Button = ({ label, onClick,icon}) => {
  return (
    <button
    className="px-6 4k:py-[1.838rem] md:text-[1.125rem] 2xl:px-[5.438rem] 2xl:text-[3.125rem] 2xl:py-[1.438rem] 2xl:rounded-[4.063rem] flex w-full lg:w-fit justify-center items-center gap-3 py-[0.25rem] text-center hover:bg-black rounded-2xl text-buttonTextColor font-medium leading-[2.047rem] text-[0.825rem] lg:text-7xl border-[1px] border-white/15 backdrop-blur-md bg-white/15"
      onClick={onClick}
    >
      {label} {icon&&<span>{icon}</span>}
    </button>
  );
};


Button.propTypes = {
    label: PropTypes.string,
    onClick:PropTypes.func,
    icon:PropTypes.any
  };
  