const MiddleFeature = () => {
  return (
    <div className="relative">
      <img
        src="./images/illustration-phones.svg"
        alt="phones"
        className="absolute -top-52 left-0 z-10"
      />
      <div
        className=" bg-gradient-to-b from-bgGradStart to-bgGradEnd 
    rounded-tr-[100px] rounded-bl-[100px] pb-24 pt-44 relative overflow-hidden"
      >
        <img
          src="./images/bg-pattern-circles.svg"
          alt="circles background"
          className="absolute -top-24 left-0 z-[1] scale-150 "
        />

        <section className="flex flex-col  items-center ">
          <h1 className="text-3xl text-center p-6 text-white z-[10]">
            State of the Art Infrastructure
          </h1>
          <p className="text-sm text-center text-white opacity-80 px-6 z-[10] ">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MiddleFeature;
