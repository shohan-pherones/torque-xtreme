import Hero from "../components/Hero";
import Mechanics from "../components/Mechanics";
import Services from "../components/Services";

const Home = ({ navbarHeight }) => {
  return (
    <div style={{ marginTop: `${navbarHeight}px` }}>
      <Hero />
      <Services />
      <Mechanics />
    </div>
  );
};

export default Home;
