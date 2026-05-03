import React from "react";
import "./portfolioBanner.css";
import cvPdf from "../../assets/pdf/thiago-dambroski-cv.pdf";
import letterPdf from "../../assets/pdf/carta-de-apresentacao.pdf";

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

          <a
            href={letterPdf}
            download="carta-de-apresentacao.pdf"
            className="portfolio-banner-button"
          >
            Cover Letter
          </a>

          <a
            href="https://youtu.be/ZNuPQIHktF0"
            target="_blank"
            rel="noreferrer"
            className="portfolio-banner-button portfolio-banner-button-active"
          >
            Watch Video
          </a>
        </div>
      </div>
    </section>
  );
}

export default PortfolioBanner;