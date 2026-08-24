import { Helmet } from "react-helmet";
import { Navigate, Route, Routes } from "react-router-dom";
import { projectData } from "./ProjectData";
import ContactMe from "./Home/ContactMe/ContactMe";
import Home from "./Home/Home";
import ProjectsShowCase from "./ProjectShowCase/ProjectsShowCase";
import Projects from "./Projects/Projects";

function App() {
  return (
    <>
      <Helmet>
        <title>Thiago Dambroski | Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Thiago Dambroski, a full-stack developer building responsive web applications, React interfaces, and Java Spring Boot back ends."
        />
        <meta name="author" content="Thiago Dambroski" />
        <meta property="og:title" content="Thiago Dambroski | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Explore full-stack, front-end, and back-end projects by Thiago Dambroski."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/showCase"
          element={<ProjectsShowCase projects={projectData} />}
        />
        {projectData.map((project) => (
          <Route
            key={project.id}
            path={project.navLink}
            element={<Projects projectData={project} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <ContactMe />
    </>
  );
}

export default App;
