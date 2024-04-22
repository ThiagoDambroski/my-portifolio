import React from "react";
import "./contactMe.css";
import email from "../../assets/images/icon/contact icon/email.png";
import telephone from "../../assets/images/icon/contact icon/telephone.png";
import linkedin from "../../assets/images/icon/contact icon/linkedin.png";
import gitHub from "../../assets/images/icon/contact icon/github.png";
import youtube from "../../assets/images/icon/contact icon/youtube.png";
import upWork from "../../assets/images/icon/contact icon/upwork.png";
import SquareIcon from "./SquareIcon";

function ContactMe() {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <div className="squares">
        <SquareIcon
          image={email}
          title="Email"
          description="dambroskic@hotmail.com"
          type="email"
        />
        <SquareIcon
          image={telephone}
          title="Telphone"
          description="+81 99798-9475"
          type="tel"
        />
        <SquareIcon
          image={gitHub}
          title="Git Hub"
          description="github.com/ThiagoDambroski"
          type="git"
        />
        <SquareIcon
          image={youtube}
          title="Youtube"
          description="@thiagodambroski5666"
          type="youtube"
        />
        <SquareIcon
          image={linkedin}
          title="Linkedin"
          description="thiago-dambroski-516a43211/"
          type="linkedin"
        />
        <SquareIcon
          image={upWork}
          title="upwork"
          description="Thiago Dambroski"
          type="upwork"
        />
      </div>
    </div>
  );
}

export default ContactMe;
