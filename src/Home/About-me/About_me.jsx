import React, { useEffect, useState } from "react";
import "./about_me.scss";
import thiago from "../../assets/images/thiago.jpg";

import reactIcon from "../../assets/images/icon/programs icon/react.png";
import javaIcon from "../../assets/images/icon/programs icon/java.png";
import springIcon from "../../assets/images/icon/programs icon/spring-icon.png";
import phytonIcon from "../../assets/images/icon/programs icon/phytonIcon.png";
import htmlIcon from "../../assets/images/icon/programs icon/html.png";
import cssIcon from "../../assets/images/icon/programs icon/css.png";
import jsIcon from "../../assets/images/icon/programs icon/js.png";
import mySqlIcon from "../../assets/images/icon/programs icon/mysql.png";
import gitIcon from "../../assets/images/icon/programs icon/git.png";
import tsIcon from "../../assets/images/icon/programs icon/ts.png";

function AboutMe() {
  const [selectedSkill, setSelectedSkill] = useState("react");
  const [abilityPage, setAbilityPage] = useState(0);

  const skills = {
    react: { icon: reactIcon, abilities: ["Hooks", "Context", "Reusable UI"] },
    java: { icon: javaIcon, abilities: ["OOP", "Collections"] },
    spring: { icon: springIcon, abilities: ["APIs", "Security"] },
    html: { icon: htmlIcon, abilities: ["Semantic HTML"] },
    css: { icon: cssIcon, abilities: ["Flexbox", "Grid"] },
    javaScript: { icon: jsIcon, abilities: ["Async", "DOM"] },
    typeScript: { icon: tsIcon, abilities: ["Types", "Interfaces"] },
    phyton: { icon: phytonIcon, abilities: ["Scripting"] },
    mysql: { icon: mySqlIcon, abilities: ["Queries"] },
    git: { icon: gitIcon, abilities: ["Version Control"] }
  };

  const abilitiesPerPage = 5;
  const currentAbilities = skills[selectedSkill].abilities;
  const totalAbilityPages = Math.ceil(currentAbilities.length / abilitiesPerPage);

  const visibleAbilities = currentAbilities.slice(
    abilityPage * abilitiesPerPage,
    abilityPage * abilitiesPerPage + abilitiesPerPage
  );

  useEffect(() => {
    setAbilityPage(0);
  }, [selectedSkill]);

  function handlePreviousAbilityPage() {
    setAbilityPage((currentPage) => Math.max(currentPage - 1, 0));
  }

  function handleNextAbilityPage() {
    setAbilityPage((currentPage) =>
      Math.min(currentPage + 1, totalAbilityPages - 1)
    );
  }

  return (
    <section className="about-idle">
      <div className="about-main">
        <div className="about-avatar">
          <img src={thiago} alt="Thiago Dambroski" />
        </div>

        <div className="about-terminal">
          <div className="terminal-header">
            <span>developer.system</span>
            <span>{selectedSkill}</span>
          </div>

          <div className="terminal-code">
            <div>
              <span className="code-keyword">class</span>{" "}
              <span className="code-class">Developer</span>{" "}
              <span className="code-bracket">{"{"}</span>
            </div>

            <div className="code-line">
              <span className="code-property">name</span>{" "}
              <span className="code-operator">=</span>{" "}
              <span className="code-string">"Thiago Dambroski"</span>
            </div>

            <div className="code-line">
              <span className="code-property">role</span>{" "}
              <span className="code-operator">=</span>{" "}
              <span className="code-string">"Fullstack Developer"</span>
            </div>

            <div className="code-line">
              <span className="code-property">education</span>{" "}
              <span className="code-operator">=</span>{" "}
              <span className="code-string">"Engenharia Informatica"</span>
            </div>

            <div className="code-line">
              <span className="code-property">mainSkill</span>{" "}
              <span className="code-operator">=</span>{" "}
              <span className="code-string">"{selectedSkill}"</span>
            </div>

            <div>
              <span className="code-bracket">{"}"}</span>
            </div>

            <div className="code-space">
              <span className="code-method">system</span>
              <span className="code-dot">.</span>
              <span className="code-function">load</span>
              <span className="code-bracket">();</span>
            </div>
          </div>

          <div className="terminal-info">
            <div className="ability-header">
              <h3>{selectedSkill}</h3>

              {totalAbilityPages > 1 && (
                <div className="ability-controls">
                  <button
                    type="button"
                    onClick={handlePreviousAbilityPage}
                    disabled={abilityPage === 0}
                  >
                    {"<"}
                  </button>

                  <button
                    type="button"
                    onClick={handleNextAbilityPage}
                    disabled={abilityPage === totalAbilityPages - 1}
                  >
                    {">"}
                  </button>
                </div>
              )}
            </div>

            <div className="ability-display">
              {visibleAbilities.map((ability, index) => (
                <div className="ability-tag" key={`${selectedSkill}-${ability}-${index}`}>
                  <span className="tag-symbol">&lt;</span>
                  <span className="tag-name">{ability}</span>
                  <span className="tag-symbol"> /&gt;</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="skill-dock">
        {Object.keys(skills).map((key) => (
          <img
            key={key}
            src={skills[key].icon}
            alt={key}
            className={selectedSkill === key ? "active" : ""}
            onClick={() => setSelectedSkill(key)}
          />
        ))}
      </div>
    </section>
  );
}

export default AboutMe;