import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const GifPlayer = ({ gif, image, path }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      onClick={() => navigate(path)}
      className="md:w-[31.063rem] 4k:w-[77.063rem] 4k:h-[42.813rem] md:h-[17.375rem] 2xl:w-[64.188rem] 2xl:h-[35.625rem] relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={isHovered || windowSize?.width<1024 ? gif : image}
        alt="Hover to animate"
        className="w-full rounded-[1rem] h-full object-cover overflow-hidden"
      />
      <div className="absolute right-8 bottom-6">
        {windowSize?.width > 767 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            {!isHovered ? (
              <>
                <path
                  d="M34.1971 16.7146C34.1971 15.8862 33.5255 15.2146 32.6971 15.2146L19.1971 15.2146C18.3687 15.2146 17.6971 15.8862 17.6971 16.7146C17.6971 17.543 18.3687 18.2146 19.1971 18.2146H31.1971V30.2146C31.1971 31.043 31.8687 31.7146 32.6971 31.7146C33.5255 31.7146 34.1971 31.043 34.1971 30.2146L34.1971 16.7146ZM17.0607 34.4723L33.7578 17.7752L31.6364 15.6539L14.9393 32.351L17.0607 34.4723Z"
                  fill="#D9D9D9"
                />
                <circle
                  cx="24.65"
                  cy="24.65"
                  r="22.65"
                  stroke="#D9D9D9"
                  strokeWidth="4"
                />
              </>
            ) : (
              <>
                <circle cx="24.6481" cy="24.6481" r="24.6481" fill="#D9D9D9" />
                <circle
                  cx="24.6481"
                  cy="24.6481"
                  r="24.6481"
                  stroke="#D9D9D9"
                />
                <path
                  d="M33.304 16.6971C33.304 15.8687 32.6325 15.1971 31.804 15.1971L18.304 15.1971C17.4756 15.1971 16.804 15.8687 16.804 16.6971C16.804 17.5256 17.4756 18.1971 18.304 18.1971H30.304V30.1971C30.304 31.0256 30.9756 31.6971 31.804 31.6971C32.6325 31.6971 33.304 31.0256 33.304 30.1971L33.304 16.6971ZM16.1676 34.4549L32.8647 17.7578L30.7434 15.6365L14.0463 32.3336L16.1676 34.4549Z"
                  fill="#171D44"
                />
              </>
            )}
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              d="M34.1971 16.7146C34.1971 15.8862 33.5255 15.2146 32.6971 15.2146L19.1971 15.2146C18.3687 15.2146 17.6971 15.8862 17.6971 16.7146C17.6971 17.543 18.3687 18.2146 19.1971 18.2146H31.1971V30.2146C31.1971 31.043 31.8687 31.7146 32.6971 31.7146C33.5255 31.7146 34.1971 31.043 34.1971 30.2146L34.1971 16.7146ZM17.0607 34.4723L33.7578 17.7752L31.6364 15.6539L14.9393 32.351L17.0607 34.4723Z"
              fill="#D9D9D9"
            />
            <circle
              cx="24.65"
              cy="24.65"
              r="22.65"
              stroke="#D9D9D9"
              strokeWidth="4"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

GifPlayer.propTypes = {
  gif: PropTypes.any,
  image: PropTypes.any,
  path: PropTypes.string,
};
