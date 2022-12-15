import Hero from "../components/Hero";
import Mechanics from "../components/Mechanics";
import Services from "../components/Services";
import PageTitle from "../components/PageTitle";

const Home = ({ navbarHeight }) => {
  return (
    <div style={{ marginTop: `${navbarHeight}px` }}>
      <PageTitle title="Home" />
      <Hero />
      <Services />
      <Mechanics />
    </div>
  );
};

export default Home;
