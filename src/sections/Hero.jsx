import { Element, Link as LinkScroll } from "react-scroll";

const Hero = () => {
  return (
    <section className="relative border-2 pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 border-amber-400">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3 ">
              Video Editing
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly Simple
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed Xora AI video editor to be easy to use, quick to learn
              and surprisingly powerful.
            </p>
            <LinkScroll to="features" spy smooth offset={-100}>hello</LinkScroll>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
