import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-6xl lg:text-8xl font-bold uppercase">
            Good Car for Good Moments
          </h1>
          <p className="mb-5 text-xl">
            You can no more trust Jesus and not intend to obey him than you
            could trust your doctor and your auto mechanic and not intend to
            follow their advice. If you don't intend to follow their advice, you
            simply don't trust them.
          </p>
          <AnchorLink href="#services" className="btn btn-primary text-xl">
            Let's repair your car
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
