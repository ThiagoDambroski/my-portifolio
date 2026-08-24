import cvPdf from "../../assets/pdf/thiago-dambroski-cv.pdf";
import "./portfolioBanner.css";

function PortfolioBanner() {
  return (
    <section className="portfolio-banner">
      <div className="portfolio-banner-content">
        <div className="portfolio-banner-text">
          <span className="portfolio-banner-command">$ openFiles</span>
          <h2>Developer Documents</h2>
        </div>

        <div className="portfolio-banner-actions">
          <a
            href={cvPdf}
            download="thiago-dambroski-cv.pdf"
            className="portfolio-banner-button"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default PortfolioBanner;
