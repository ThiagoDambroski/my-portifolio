function SquareIcon({ image, description, type }) {
  const openExternal = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleClick = () => {
    if (type === "email") {
      window.location.href = `mailto:${description}`;
      return;
    }

    if (type === "tel") {
      openExternal("https://api.whatsapp.com/send?phone=351927267839");
      return;
    }

    if (type === "git") {
      openExternal(`https://${description}`);
      return;
    }

    if (type === "linkedin") {
      openExternal(`https://linkedin.com/in/${description}`);
      return;
    }

    if (type === "upwork") {
      openExternal("https://www.upwork.com/freelancers/~01e0c744d6b49b8eb6");
      return;
    }

    if (type === "youtube") {
      openExternal("https://www.youtube.com/@thiagodambroski5666");
    }
  };

  return (
    <button type="button" className="square-icon" onClick={handleClick}>
      <img src={image} alt="" className="square-icon-image" />
      <p>{description}</p>
    </button>
  );
}

export default SquareIcon;
