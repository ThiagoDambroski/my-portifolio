const PROJECT_TYPE_BY_TITLE = {
  "Back-End": 0,
  "Front-End": 1,
  "Full Stack": 3,
};

function ToggleButton({ title, activeProject, setActiveProject }) {
  const projectType = PROJECT_TYPE_BY_TITLE[title];
  const active = activeProject === projectType;

  return (
    <button
      type="button"
      className={`toggle-project-title ${active ? "button-active" : ""}`}
      onClick={() => setActiveProject(projectType)}
    >
      {title}
    </button>
  );
}

export default ToggleButton;
