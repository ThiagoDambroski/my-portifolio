import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { projectData } from "./ProjectData";
import Projects from "./Projects/Projects";
import Home from "./Home/Home";
import NavBar from "./NavBar/navBar";
import ContactMe from "./Home/ContactMe/ContactMe";
import ProjectsShowCase from "./ProjectShowCase/ProjectsShowCase";
import { Helmet } from 'react-helmet';
function App() {
  const restScreen = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
     <Helmet>
        <title>Thiago Dambroski</title>
      </Helmet>
      <NavBar restScreen={restScreen} />
      <Routes>
        <Route exact path="/" element={<Home resetScreen={restScreen} />} />
        <Route
          path="/backEndProjectFoodDelivery"
          element={<Projects projectData={projectData[2]} />}
        />

        <Route
          path="/frontEndProjectArchitectPortifolio"
          element={<Projects projectData={projectData[1]} />}
        />
        <Route
          path="/frontEndProjectReeyogar"
          element={<Projects projectData={projectData[3]} />}
        />
        <Route
          path="/frontEndProjectPapafigo"
          element={<Projects projectData={projectData[4]} />}
        />
        <Route
          path="/backEndProjectWebStore"
          element={<Projects projectData={projectData[0]} />}
        />

        <Route
          path='/fullStackProjectClientManagerApp'
          element={<Projects projectData={projectData[5]}/>}
        />

        <Route
          path="/showCase"
          element={<ProjectsShowCase projects={projectData} />}
        />
      </Routes>
      <ContactMe />
    </>
  );
}

export default App;
