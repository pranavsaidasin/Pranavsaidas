import React from "react";
import dpImg from "../assets/fete.png";

export const DesignerProfile = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row px-4 md:px-0 gap-[1.5rem] items-center justify-between pt-2 pb-[1.2rem]">
        <img
          className="md:w-[12.125rem]  2xl:w-[35.25rem] 4k:w-[42.875rem] 4k:h-[42.875rem] 2xl:h-[35.25rem] md:h-[12.125rem] object-fill"
          src={dpImg}
          alt="designer profile"
        />
        <div className=" flex-1 rounded-xl 4k:rounded-[2.5rem] backdrop-blur-md bg-white/15 p-[1.25rem] 2xl:py-[2.563rem] 4k:py-[4rem] 2xl:px-[3.688rem] px-[1.188rem] md:px-[2.25rem]">
          <h2 className="text-light-gray 2xl:text-[2.188rem] 4k:text-[2.813rem] 4k:leading-[5.625rem] 2xl:leading-[4.688rem] text-justify text-[0.75rem] leading-[1.313rem] sm:text-[1rem] font-medium  md:leading-[1.938rem]">
          As Design Head of Fete International Short Film Festival 2023, I was
          responsible for overseeing a team of designers, creating, managing,
          and collecting all design materials, such as posters, social media
          posts, mementos, and other festival-related visuals. Additionally, I
          coordinated with other departments to ensure visual consistency across
          all platforms, managed tight deadlines, and maintained a cohesive
          brand identity for the festival.
          </h2>
        </div>
      </div>
    </div>
  );
};
