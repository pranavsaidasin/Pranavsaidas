import React from "react";
import Awards1 from "../assets/awards1.png";
import Awards2 from "../assets/awards2.png";
import Awards3 from "../assets/awarsd3.png";
import Awards4 from "../assets/awrds4.png";
import Awards5 from "../assets/awards5.png";
import Awards6 from "../assets/awards7.png";
export const Awards = () => {
  const listOfAwards = [Awards1, Awards2, Awards3, Awards4, Awards5, Awards6];
  return (
    <div className="w-full gap-y-[0.38rem] 4k:mt-5 flex flex-wrap justify-between backdrop-blur-md bg-white/15 rounded-[0.938rem] md:rounded-[5rem] px-[1.313rem] lg:px-[2.875rem] py-[1.375rem] 4k:px-[7.438rem] lg:py-8">
      {listOfAwards?.map((item, ind) => (
        <div className="" key={ind}>
          <img
            className="w-[5.438rem] 4k:w-[20.188rem] 4k:h-[13.438rem] h-[3.563rem] lg:w-[9.2rem] 2xl:h-[10.688rem] 2xl:w-[16.063rem] brightness-[0.8] object-fill lg:h-[6.188rem]"
            src={item}
            alt="awards"
          />
        </div>
      ))}
    </div>
  );
};
