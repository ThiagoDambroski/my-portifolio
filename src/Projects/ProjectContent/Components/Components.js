import TitleCode from "../../../Home/Page1/TitleCode";
import gitIcon from "../../../assets/images/icon/contact icon/github.png";

function Components({ item }) {
  const informationPage = item.informationPage;

  return (
    <div className="labels">
      {informationPage.siteLink && (
        <a
          href={informationPage.siteLink}
          target="_blank"
          rel="noreferrer"
          className="project-content-button"
        >
          View project
        </a>
      )}

      <div className="project-info">
        <p>{item.description}</p>
      </div>

      {item.youtubeID && (
        <div className="project-video">
          <div className="title-code-follow-up">
            <TitleCode text="const VideoShowcase:video" />
            <iframe
              className="iframe"
              src={`https://www.youtube.com/embed/${item.youtubeID}`}
              title={item.videoTitle || item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {item.type !== 3 && item.gitLink && (
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

export default Components;
