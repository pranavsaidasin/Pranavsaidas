import React from "react";
import { ImageSlider } from "./ImageSlider";
import { Button } from "./button";

export const ImageSliderWrapper = () => {
  let arrayofShortFilims = [
    {
      title: "Avocado - Short Film",
      released: true,
      url: "https://www.youtube.com/watch?v=e34ri7uXmSA",
      images: [
        {
          normal: "/avacadoNormal.png",
          filtered: "/avacadofilter.png",
        },
        {
          normal: "/avacadoTwo.png",
          filtered: "/avacadoTwoFilter.png",
        },
      ],
    },
    {
      title: "Pettikadha - Trailer Grade",
      released: true,
      url: "https://www.youtube.com/watch?v=ZT1fTKJQ9Yo",
      images: [
        {
          normal: "/pettithakaraFilter.png",
          filtered: "/pettithakara.png",
        },
        {
          normal: "/pettikadhaTrailer.png",
          filtered: "/pettikadhaTwo.png",
        },
      ],
    },
    {
      title: "Theru - Web Series",
      released: true,
      url: "https://www.youtube.com/watch?v=UF7Y7-dDMDA&t=676s",
      images: [
        {
          normal: "/theruNormal.png",
          filtered: "/theruFIlter.png",
        },
        {
          normal: "/theruTwoNormal.png",
          filtered: "/theruTwoFilter.png",
        },
      ],
    },
    {
      title: "Roopam - Short Film",
      released: false,
      images: [
        {
          normal: "/roopamFilter.png",
          filtered: "/roopamNormalOne.png",
        },
        {
          normal: "/roopamTwoNormal.png",
          filtered: "/roopamTwoFilter.png",
        },
      ],
    },
    {
      title: "Ninte Koode - Short Film",
      released: false,
      images: [
        {
          normal: "/nintekoodeNormal.png",
          filtered: "/nintekoodeFIlter.png",
        },
        {
          normal: "/nintekoodeTwoNormal.png",
          filtered: "/nintekoodeTwoFilter.png",
        },
      ],
    },
    {
      title: "Node Graph",
      images: ["/node.png"],
    },
  ];
  const handleRedirect = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="pb-20 2xl:pb-36 4k:pt-6">
      {arrayofShortFilims?.map(({ title, images, released, url }) => (
        <div
          key={title}
          className="flex justify-center items-center flex-col pt-8"
        >
          <h2 className="relative 4k:text-[5.5rem] leading-[1.723rem] sm:leading-[80.28%] font-bold inline-block text-transparent !bg-clip-text [background:linear-gradient(90deg,_#B6B0B0_0.01%,_#504D4D_134.95%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-w-full text-[1.5rem] sm:text-[3.25rem] ">
            {title}
          </h2>
          {typeof released === "boolean" && (
            <h4 className="relative 4k:text-[1.5rem] leading-[0.551rem] sm:leading-[2.875rem] text-transparent text-[0.5rem] sm:text-[1.25rem] font-bold inline-block py-2 !bg-clip-text [background:linear-gradient(90deg,_#B6B0B0_0.01%,_#504D4D_134.95%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-w-full">
              ( SWIPE TO SEE THE GRADE )
            </h4>
          )}
          <div className="flex flex-col gap-6 w-full">
            {images?.map((item, ind) => {
              return typeof released === "boolean" ? (
                <ImageSlider key={ind} images={item} />
              ) : (
                <div className=" py-6">
                  <img
                  key={ind}
                  alt={title}
                  className="rounded-[1.563rem] w-full"
                  src={`/images/${item}`}
                />
                </div>
              );
            })}
          </div>
          {typeof released === "boolean" && (
            <div className="pt-6">
              <Button
                {...(released && { onClick: () => handleRedirect(url) })}
                {...(released && {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M16 1.5C16 0.947715 15.5523 0.5 15 0.499999L6 0.5C5.44772 0.5 5 0.947715 5 1.5C5 2.05228 5.44772 2.5 6 2.5L14 2.5L14 10.5C14 11.0523 14.4477 11.5 15 11.5C15.5523 11.5 16 11.0523 16 10.5L16 1.5ZM1.70711 16.2071L15.7071 2.20711L14.2929 0.792893L0.292893 14.7929L1.70711 16.2071Z"
                        fill="#CECACA"
                      />
                    </svg>
                  ),
                })}
                label={released ? "Watch" : "Not Released"}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
