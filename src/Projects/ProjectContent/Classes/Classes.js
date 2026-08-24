import { Fragment, useState } from "react";
import TitleCode from "../../../Home/Page1/TitleCode";
import gitIcon from "../../../assets/images/icon/contact icon/github.png";
import CarousselImages from "./CarousselImages";
import Table from "./Table";
import "./classes.css";

function Classes({ item, lineNumber }) {
  const informationPage = item.informationPage;
  const [isListVisible, setListVisible] = useState(
    Array(informationPage.classes.length).fill(false)
  );

  const toggleList = (index) => {
    setListVisible((currentList) =>
      currentList.map((isVisible, itemIndex) =>
        itemIndex === index ? !isVisible : isVisible
      )
    );
  };

  return (
    <div className="labels">
      {item.type === 1 && (
        <div className="project-info">
          <p>{item.description}</p>
        </div>
      )}

      <div className="center-title">
        <div className="title-code-follow-up">
          <TitleCode
            text="const ClassesAndProperties:class"
            lineNumber={lineNumber}
          />

          {informationPage.classes.map((className, index) => (
            <Fragment key={className}>
              <button
                type="button"
                onClick={() => toggleList(index)}
                className={
                  isListVisible[index] ? "class-label-ative" : "class-label"
                }
              >
                {className}
              </button>

              {isListVisible[index] && (
                <div className="method-table">
                  {informationPage.images[index] && (
                    <CarousselImages
                      images={informationPage.images[index]}
                      options={1}
                    />
                  )}

                  <h2>Properties</h2>
                  <Table
                    data={informationPage.properties[index]}
                    dataType="properties"
                  />

                  <h2>Methods</h2>
                  <Table
                    data={informationPage.methods[index]}
                    dataType="methods"
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      {item.gitLink && (
        <div className="project-content-button-code">
          <img src={gitIcon} alt="GitHub" />
          <a href={item.gitLink} target="_blank" rel="noreferrer">
            Full Code
          </a>
        </div>
      )}
    </div>
  );
}

export default Classes;
