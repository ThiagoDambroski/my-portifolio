import { useState } from "react";
import "./experienceEducation.css";

function ExperienceEducation() {
  const data = [
  {
    type: "job",
    title: "Full-Stack Developer",
    place: "OTL Cinema Teatral Lisboa",
    date: "Nov 2025 - Present",
    description: "Developed a full-stack website for a theatre play rental platform using React on the front end and Java on the back end."
  },
  {
    type: "job",
    title: "Full-Stack Developer",
    place: "Lips-lab",
    date: "Oct 2025 - Jan 2026",
    description: "Developed a website for lipstick and gloss customization and sales, including an interactive real-time colour-changing system."
  },
  {
    type: "job",
    title: "Back-End Developer Intern",
    place: "Reative",
    date: "Sep 2025 - Oct 2025",
    description: "Worked on back-end development with Spring Boot, applying Domain-Driven Design principles to structure services and application domain logic."
  },
  {
    type: "job",
    title: "Front-End Developer",
    place: "Miguel Silva - Saúde e Bem Estar",
    date: "Jan 2025 - Mar 2025",
    description: "Developed a modern website for an osteopathy clinic using React and Vite, focused on user experience, fast interface performance and intuitive navigation."
  },
  {
    type: "job",
    title: "Full-Stack Developer Intern",
    place: "Own Product",
    date: "Sep 2024 - Dec 2024",
    description: "Worked on a full-stack application project, focusing on back-end development with Spring Boot and Domain-Driven Design principles."
  },
  {
    type: "education",
    title: "Bachelor's Degree in Computer Engineering",
    place: "Universidade Lusófona",
    date: "2025 - 2028",
    description: "Studying computer engineering with focus on programming, software development, algorithms, databases and engineering fundamentals."
  },
  {
    type: "education",
    title: "Full-Stack Web Development Certification",
    place: "ETIC",
    date: "2025 - 2026",
    description: "Focused on full-stack web development, including modern front-end and back-end technologies used to build complete web applications."
  }
];

  const [filter, setFilter] = useState("job");
  const [page, setPage] = useState(0);

  const itemsPerPage = 2;

  const filteredData = data.filter((item) => item.type === filter);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
    setPage(0);
  };

  return (
    <section className="experience-education">
      <h1>Experience && Education</h1>

      <div className="filters">
        <button
          className={filter === "job" ? "active" : ""}
          onClick={() => changeFilter("job")}
        >
          Jobs
        </button>
        <button
          className={filter === "education" ? "active" : ""}
          onClick={() => changeFilter("education")}
        >
          Education
        </button>
      </div>

      <div className="experience-education-list">
        {paginatedData.map((item, index) => (
          <div className="experience-education-card" key={index}>
            <div className="experience-education-code">
              <span className="line-number">{index + 1 + page * itemsPerPage}</span>
              <div>
                <p>
                  <span className="keyword">const</span>{" "}
                  <span className="variable">{item.type}</span>{" "}
                  <span className="operator">=</span>{" "}
                  <span className="bracket">{"{"}</span>
                </p>
                <p>title: <span className="string">"{item.title}"</span>,</p>
                <p>place: <span className="string">"{item.place}"</span>,</p>
                <p>date: <span className="string">"{item.date}"</span></p>
                <p><span className="bracket">{"}"}</span>;</p>
              </div>
            </div>

            <div className="experience-education-info">
              <span>{item.type}</span>
              <h2>{item.title}</h2>
              <h3>{item.place}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
        >
          Prev
        </button>

        <span>{page + 1} / {totalPages}</span>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default ExperienceEducation;