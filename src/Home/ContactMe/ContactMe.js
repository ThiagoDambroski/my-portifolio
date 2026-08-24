import "./contactMe.css";

const contacts = [
  {
    label: "email",
    value: "dambroskic@hotmail.com",
    href: "mailto:dambroskic@hotmail.com",
    external: false,
  },
  {
    label: "whatsapp",
    value: "+351 927 267 839",
    href: "https://api.whatsapp.com/send?phone=351927267839",
    external: true,
  },
  {
    label: "github",
    value: "github.com/ThiagoDambroski",
    href: "https://github.com/ThiagoDambroski",
    external: true,
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/thiago-dambroski",
    href: "https://linkedin.com/in/thiago-dambroski",
    external: true,
  },
  {
    label: "youtube",
    value: "youtube.com/@thiagodambroski5666",
    href: "https://www.youtube.com/@thiagodambroski5666",
    external: true,
  },
  {
    label: "upwork",
    value: "upwork.com",
    href: "https://www.upwork.com/freelancers/~01e0c744d6b49b8eb6",
    external: true,
  },
];

function ContactMe() {
  return (
    <div className="contact-dock">
      <div className="dock-container">
        <div className="dock-title">$ contact</div>

        <div className="dock-grid">
          {contacts.map((item) => (
            <a
              key={item.label}
              className="dock-line"
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              <span className="key">{item.label}</span>
              <span className="separator">:</span>
              <span className="value">{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
