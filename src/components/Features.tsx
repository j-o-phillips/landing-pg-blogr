type FeaturesProps = {
  imageTitle?: string;
  title: string;
  para: string;
  img: string;
  title2: string;
  para2: string;
  bottomPadding: number;
};

const Features = ({
  imageTitle,
  title,
  para,
  img,
  title2,
  para2,
  bottomPadding,
}: FeaturesProps) => {
  return (
    <div
      className={`flex flex-col items-center  py-12 text-veryDarkBlue gap-4`}
      style={{ paddingBottom: `${bottomPadding}px` }}
    >
      <section>
        {imageTitle && (
          <h2 className="text-2xl text-center p-6">{imageTitle}</h2>
        )}

        <div>
          <img src={img} alt="" className="py-4" />
        </div>
      </section>
      <section>
        <h2 className="text-2xl text-center p-6">{title}</h2>
        <p className="text-sm text-veryDarkGrayishBlue opacity-80 px-6 text-center">
          {para}
        </p>
      </section>
      <section>
        <h2 className="text-2xl text-center p-6">{title2}</h2>
        <p className="text-sm text-veryDarkGrayishBlue opacity-80 px-6 text-center">
          {para2}
        </p>
      </section>
    </div>
  );
};

export default Features;
