import { useMemo, useState } from "react";
import { projectData } from "../../ProjectData";
import "./newPage1.css";

function NewPage1() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filters = [
    { label: "All", value: "all" },
    { label: "Full Stack", value: "fullstack" },
    { label: "Front End", value: "frontend" },
    { label: "Back End", value: "backend" }
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "frontend") {
      return projectData.filter((project) => project.type === 2);
    }

    if (activeFilter === "backend") {
      return projectData.filter((project) => project.type === 1);
    }

    if (activeFilter === "fullstack") {
      return projectData.filter((project) => project.type === 3);
    }

    return projectData;
  }, [activeFilter]);

  const getProjectType = (type) => {
    if (type === 1) {
      return "Back End";
    }

    if (type === 2) {
      return "Front End";
    }

    if (type === 3) {
      return "Full Stack";
    }

    return "Project";
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    document.body.classList.add("no-scroll");
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
    document.body.classList.remove("no-scroll");
  };

  const nextImage = () => {
    if (!selectedProject) {
      return;
    }

    setActiveImageIndex((currentIndex) =>
      currentIndex === selectedProject.images.length - 1 ? 0 : currentIndex + 1
    );
  };

  const previousImage = () => {
    if (!selectedProject) {
      return;
    }

    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? selectedProject.images.length - 1 : currentIndex - 1
    );
  };

  const getSiteLink = (project) => {
    if (project.informationPage && project.informationPage.siteLink) {
      return project.informationPage.siteLink;
    }

    return null;
  };

  return (
    <section className="newPage1-page">
      <div className="projects-section-header">
        <h1>Projects</h1>

        <div className="projects-title-code">
          <span className="projects-line-number">1</span>
          <span className="projects-keyword">const</span>
          <span className="projects-variable">projects</span>
          <span className="projects-operator">=</span>
          <span className="projects-bracket">[</span>
          <span className="projects-string">portfolio</span>
          <span className="projects-bracket">]</span>
        </div>
      </div>

      <div className="projects-filters">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={`projects-filter ${
              activeFilter === filter.value ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            className="project-card"
            onClick={() => openProject(project)}
          >
            <div className="project-card-top">
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="project-type">{getProjectType(project.type)}</span>
            </div>

            <div className="project-image-wrapper">
              <img
                src={project.images[0]}
                alt={project.title}
                className="project-preview-image"
              />
            </div>

            <div className="project-card-info">
              <div className="project-card-title">
                {project.iconImage && (
                  <img
                    src={project.iconImage}
                    alt=""
                    className="project-tech-icon"
                  />
                )}

                <h3>{project.title}</h3>
              </div>

              <p>{project.description}</p>
            </div>

            <div className="project-card-footer">
              <span>openProject()</span>
              <span>{"->"}</span>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <div className="project-lightbox">
          <div className="project-lightbox-panel">
            <div className="project-lightbox-header">
              <div className="projects-window-controls">
                <span className="projects-dot projects-dot-red"></span>
                <span className="projects-dot projects-dot-yellow"></span>
                <span className="projects-dot projects-dot-green"></span>
              </div>

              <span>{selectedProject.title}</span>

              <button
                type="button"
                className="project-lightbox-close"
                onClick={closeProject}
              >
                close
              </button>
            </div>

            <div className="project-lightbox-content">
              <div className="project-lightbox-media">
                <button
                  type="button"
                  className="project-media-arrow"
                  onClick={previousImage}
                >
                  {"<"}
                </button>

                <img
                  src={selectedProject.images[activeImageIndex]}
                  alt={selectedProject.title}
                  className="project-lightbox-image"
                />

                <button
                  type="button"
                  className="project-media-arrow"
                  onClick={nextImage}
                >
                  {">"}
                </button>
              </div>

              <div className="project-image-dots">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    className={`project-image-dot ${
                      activeImageIndex === index ? "active" : ""
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`Open project image ${index + 1}`}
                  ></button>
                ))}
              </div>

              <div className="project-lightbox-info">
                <span className="project-lightbox-type">
                  {getProjectType(selectedProject.type)}
                </span>

                <h3>{selectedProject.title}</h3>

                <p>{selectedProject.description}</p>

                <div className="project-links">
                  {selectedProject.gitLink && (
                    <a
                      href={selectedProject.gitLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}

                  {getSiteLink(selectedProject) && (
                    <a
                      href={getSiteLink(selectedProject)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Project
                    </a>
                  )}
                </div>
              </div>

              {selectedProject.youtubeID && (
                <div className="project-video">
                  <h4>{selectedProject.videoTitle || "Project Video"}</h4>

                  <iframe
                    src={`https://www.youtube.com/embed/${selectedProject.youtubeID}`}
                    title={selectedProject.videoTitle || selectedProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default NewPage1;