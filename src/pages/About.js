import PageTitle from "../components/PageTitle";

const About = ({ navbarHeight }) => {
  return (
    <div style={{ marginTop: `${navbarHeight}px` }}>
      <PageTitle title="About" />
      <h1>About</h1>
    </div>
  );
};

export default About;
