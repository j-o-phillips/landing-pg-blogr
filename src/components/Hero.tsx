import { Button } from "@nextui-org/react";

const Hero = () => {
  return (
    <>
      <div
        className=" relative flex flex-col 
    justify-center items-center bg-gradient-to-b from-redGradStart
     to-redGradEnd pt-24 text-white rounded-bl-[100px] overflow-y-hidden "
      >
        <img
          src="./images/bg-pattern-intro-mobile.svg"
          alt="squared background image"
          className="absolute top-0 left-0 z-1  object-none min-h-[500px] "
        />
        <h1 className="text-3xl px-4 py-2 text-center z-10">
          A modern publishing platform
        </h1>
        <h4 className="text-xl px-4 py-2 text-center z-10">
          Grow your audience and build your online brand
        </h4>
        <div className="flex justify-center items-center pt-6 pb-32 gap-4">
          <Button radius="full" className="bg-white w-[125px] text-lightRed">
            Start for Free
          </Button>
          <Button
            radius="full"
            className="bg-transparent border border-white w-[125px] text-white"
          >
            Learn More
          </Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
