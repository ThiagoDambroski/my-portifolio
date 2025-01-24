import React from "react";

function SquareIcon({ image, title, description, type }) {
  const handleClick = () => {
    if (type === "email") {
      window.location.href = `mailto:${description}`;
    }
    if (type === "tel") {
      const phoneNumber = "351927267839";
      window.open(
        `https://api.whatsapp.com/send?phone=${phoneNumber}`,
        "_blank"
      );
    }
    if (type === "git") {
      window.open(`https://${description}`, "_blank");
    }
    if (type === "linkedin") {
      window.open(`https://linkedin.com/in/${description}`, "_blank");
    }
    if (type === "upwork") {
      window.open(
        `https://www.upwork.com/freelancers/~01e0c744d6b49b8eb6`,
        "_blank"
      );
    }
    if (type === "youtube") {
      window.open("https://www.youtube.com/@thiagodambroski5666");
    }
  };

  return (
    <div className="square-icon" onClick={handleClick}>
      <img src={image} alt="icons" className="square-icon-image"/>
      
      <p>{description}</p>
    </div>
  );
}

export default SquareIcon;
