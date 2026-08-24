import { NavLink } from "react-router-dom";
import gitHub from "../assets/images/icon/programs icon/github-icon.png";

function ToggleProject({ projects }) {
  return (
    <>
      {projects.map((item) => (
        <div className="toggle-project" key={item.id}>
          <img
            src={item.iconImage}
            style={{ maxWidth: "10%" }}
            alt={`${item.title} technology`}
          />
          <NavLink to={item.navLink}>
            <span>{item.title}</span>
          </NavLink>
          {item.gitLink && (
            <a
              href={item.gitLink}
              className="github-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={gitHub}
                style={{ maxWidth: "100%" }}
                alt="GitHub repository"
              />
            </a>
          )}
        </div>
      ))}
    </>
  );
}

export default ToggleProject;
