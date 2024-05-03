type FeaturesProps = {
  imageTitle?: string;
  title: string;
  para: string;
  img: string;
  imgDesktop: string;
  title2: string;
  para2: string;
  bottomPadding: number;
  reverseOrder?: boolean;
};

const Features = ({
  imageTitle,
  title,
  para,
  img,
  imgDesktop,
  title2,
  para2,
  bottomPadding,
  reverseOrder,
}: FeaturesProps) => {
  return (
    <div
      className={`py-12 text-veryDarkBlue overflow-hidden  `}
      style={{ paddingBottom: `${bottomPadding}px` }}
    >
      {imageTitle && (
        <h2 className="text-2xl sm:text-3xl text-center p-6 md:p-12">
          {imageTitle}
        </h2>
      )}
      <div className="grid grid-cols-1  px-4  md:grid-cols-2  ">
        <section className={`flex justify-center  md:order-2`}>
          <div className="relative  w-full flex justify-center ">
            <img src={img} alt="graph" className="py-4 md:hidden" />
            <img
              src={imgDesktop}
              alt="graph"
              className="hidden md:block absolute scale-150 left-36 max-h-[400px] "
            />
          </div>
        </section>
        <div className="md:order-1 px-10">
          <section>
            <h2 className="text-2xl text-center p-6">{title}</h2>
            <p className="text-sm text-veryDarkGrayishBlue opacity-80  text-center">
              {para}
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-center p-6">{title2}</h2>
            <p className="text-sm text-veryDarkGrayishBlue opacity-80  text-center">
              {para2}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Features;
