const MiddleFeature = () => {
  return (
    <div className="relative flex items-center justify-center md:mb-24">
      <img
        src="./images/illustration-phones.svg"
        alt="phones"
        className="absolute max-h-[400px] -top-52 z-10 md:scale-90 md:-top-12 md:left-0"
      />
      <div
        className=" bg-gradient-to-b from-bgGradStart to-bgGradEnd 
    rounded-tr-[100px] rounded-bl-[100px] pb-24 pt-44 md:py-12 relative overflow-hidden md:grid md:grid-cols-2"
      >
        <img
          src="./images/bg-pattern-circles.svg"
          alt="circles background"
          className="absolute -top-24 left-0 z-[1] scale-150 md:scale-[0.6] md:-top-[350px] md:-left-[200px] "
        />

        <section className="flex flex-col  items-center md:col-start-2 ">
          <h1 className="text-3xl md:text-2xl text-center p-6 text-white z-[10]">
            State of the Art Infrastructure
          </h1>
          <p className="text-sm text-center text-white opacity-80 px-10 z-[10] ">
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
