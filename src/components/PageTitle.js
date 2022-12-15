import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Torque Xtreme</title>
    </Helmet>
  );
};

export default PageTitle;
