const Footer = () => {
  return (
    <div className="bg-veryDarkBlue rounded-tr-[100px] py-10 text-grayishBlue">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:justify-around sm:items-start sm:gap-0 ">
        <h1 className="text-3xl text-center py-3 text-white">Blogr</h1>
        <section className="flex flex-col items-center gap-1">
          <h5 className="text-white py-3">Product</h5>
          <h5 className="text-sm">Overview</h5>
          <h5 className="text-sm">Pricing</h5>
          <h5 className="text-sm">MarketPlace</h5>
          <h5 className="text-sm">Features</h5>
          <h5 className="text-sm">Integrations</h5>
        </section>
        <section className="flex flex-col items-center gap-1">
          <h5 className="text-white py-3">Company</h5>
          <h5 className="text-sm">About</h5>
          <h5 className="text-sm">Team</h5>
          <h5 className="text-sm">Blog</h5>
          <h5 className="text-sm">Careers</h5>
        </section>
        <section className="flex flex-col items-center gap-1">
          <h5 className="text-white py-3">Connect</h5>
          <h5 className="text-sm">Contact</h5>
          <h5 className="text-sm">Mewsletter</h5>
          <h5 className="text-sm">LinkedIn</h5>
        </section>
      </div>
    </div>
  );
};

export default Footer;
