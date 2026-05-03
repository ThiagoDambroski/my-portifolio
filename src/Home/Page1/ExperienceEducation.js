import React, { useState } from "react";
import "./experienceEducation.css";

function ExperienceEducation() {
  const data = [
    {
      type: "job",
      title: "Fullstack Developer",
      place: "Teatro Lisboa",
      date: "2025 - Present",
      description: "Building a fullstack streaming platform with React and Spring Boot."
    },
    {
      type: "job",
      title: "Freelancer",
      place: "Self-employed",
      date: "2023 - Present",
      description: "Working on frontend and fullstack projects for clients."
    },
    {
      type: "education",
      title: "Web Development",
      place: "ETIC",
      date: "2024 - 2025",
      description: "Focused on modern web applications and UI."
    },
    {
      type: "education",
      title: "Computer Science",
      place: "University",
      date: "2021 - 2024",
      description: "Studied algorithms, databases and software engineering."
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