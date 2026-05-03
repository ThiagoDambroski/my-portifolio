import React from "react";
import "./contactMe.css";

function ContactMe() {
  const contacts = [
    {
      label: "email",
      value: "dambroskic@hotmail.com",
      action: () => window.location.href = "mailto:dambroskic@hotmail.com"
    },
    {
      label: "whatsapp",
      value: "+351 927 267 839",
      action: () =>
        window.open("https://api.whatsapp.com/send?phone=351927267839", "_blank")
    },
    {
      label: "github",
      value: "github.com/ThiagoDambroski",
      action: () =>
        window.open("https://github.com/ThiagoDambroski", "_blank")
    },
    {
      label: "linkedin",
      value: "linkedin.com/in/thiago-dambroski",
      action: () =>
        window.open("https://linkedin.com/in/thiago-dambroski", "_blank")
    },
    {
      label: "youtube",
      value: "youtube.com/@thiagodambroski5666",
      action: () =>
        window.open("https://www.youtube.com/@thiagodambroski5666", "_blank")
    },
    {
      label: "upwork",
      value: "upwork.com",
      action: () =>
        window.open("https://www.upwork.com/freelancers/~01e0c744d6b49b8eb6", "_blank")
    }
  ];

  return (
    <div className="contact-dock">
      <div className="dock-container">
        <div className="dock-title">$ contact</div>

        <div className="dock-grid">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="dock-line"
              onClick={item.action}
            >
              <span className="key">{item.label}</span>
              <span className="separator">:</span>
              <span className="value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactMe;