import AboutMe from "./About-me/About_me";
import ExperienceEducation from "./Page1/ExperienceEducation";
import HomePage from "./HomePage";
import NewPage1 from "./Page1/NewPage1";
import PortfolioBanner from "./dowload-page/PortfolioBanner";

function Home() {
  return (
    <>
      <HomePage />
      <AboutMe />
      <PortfolioBanner />
      <ExperienceEducation />
      <NewPage1 />
    </>
  );
}

export default Home;
