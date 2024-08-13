import React from "react";
import momentoImg from "../assets/memento.png";
import smpImg from "../assets/smp.png";
import ssImg from "../assets/SS.png";
import ssTwoImg from "../assets/SS2.png";
import awardsImage from "../assets/awardsImage.png";
import standies from "../assets/standies.png";
import dcr2 from "../assets/dcr2.png";
import dcr1 from "../assets/dcr1.png";
import dcr3 from "../assets/dcr3.png";
import collage from "../assets/collage.png";
import beerbottle from "../assets/beerbottle.png";
import kallu from "../assets/kallu.png";
import kallu1 from "../assets/kallu1.png";

export const PhotoContainer = () => {
  const images = [
    {
      image: momentoImg,
      alt: "momento",
    },
    {
      image: smpImg,
      alt: "social media poster",
    },
    {
      image: ssImg,
      alt: "screening schedule",
    },
    {
      image: ssTwoImg,
      alt: "ssTwoImg schedule",
    },
    {
      image: awardsImage,
      alt: "fete image",
    },
    {
      image: standies,
      alt: "standies image",
    },
    {
      image: dcr2,
      alt: "dcr2",
    },
    {
      image: dcr1,
      alt: "dcr1",
    },
    {
      image: dcr3,
      alt: "dcr3",
    },
  ];
  return (
    <div>
      <div className="flex  px-4 md:px-0 flex-col gap-[1.2rem] 4k:pb-20">
        {images?.map((item) => (
          <img
            key={item.alt}
            className="object-cover  w-full"
            src={item.image}
            alt={item.alt}
          />
        ))}
        <div className="pb-14 ">
          <h2 className="text-center text-[1.5rem] pt-6 pb-10 w-full relative leading-[80.28%] font-bold  text-transparent !bg-clip-text [background:linear-gradient(90deg,_#B6B0B0_0.01%,_#504D4D_134.95%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-w-full sm:text-[3.25rem] ">
            Other Works
          </h2>
          <img
            className="object-cover w-full"
            src={collage}
            alt={"oru rameshan sambavam"}
          />
          <div className="flex gap-6 py-6">
            <div className="w-[45%] flex flex-col gap-6">
              <img
                className="object-cover w-full"
                src={kallu}
                alt={"oru rameshan sambavam"}
              />
              <img
                className="object-cover w-full"
                src={kallu1}
                alt={"oru rameshan sambavam"}
              />
            </div>
            <div className="w-[55%]">
              <img
                className="object-cover w-full h-full rounded-xl"
                src={beerbottle}
                alt={"beerbottle"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
