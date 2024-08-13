import BlackmagicImg from '../assets/cpBg.png'
export const ColouristProfile = () => {
  return (
    <div className='flex flex-col pt-2 2xl:pt-4 lg:flex-row justify-between gap-[1.5rem] md:gap-[2.188rem]'>
      <div className='rounded-xl h-[14.625rem]  md:mx-auto opacity-[0.9] 2xl:w-[53.25rem] 2xl:h-[42.375rem]  md:w-[20.75rem] md:h-[16.5rem]'>
        <img src={BlackmagicImg} alt="blackmagic certificate" className='w-full h-full object-fill' />
      </div>
      <div className='flex-1 flex items-center rounded-xl backdrop-blur-md bg-white/15 p-[1.5rem] sm:p-[2.25rem]'>
        <h4 className='text-light-gray 2xl:text-[2.625rem] 4k:leading-[5.625rem] 4k:text-[2.938rem]  2xl:px-[2.188rem] 2xl:rounded-[2.5rem] 2xl:leading-[4.375rem] text-justify text-[0.688rem] sm:text-[1.125rem] font-medium leading-[1.063rem] sm:leading-[1.938rem]'>
          I am a Blackmagicdesign certified professional colorist who loves
          making projects look their best. Doing something you enjoy is a great
          way to make your clients happy. I have worked on some popular web
          series and short films. My node graph workflow and knowledge with ACES
          and DWG ensures precise and consistent color management. Check out my
          portfolio to see my works.{" "}
        </h4>
      </div>
    </div>
  );
};
