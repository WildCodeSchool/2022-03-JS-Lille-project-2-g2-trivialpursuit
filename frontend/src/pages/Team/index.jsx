import Style from "./style";

const linkedinImg = `./src/assets/pictures/linkedin-icon.svg`;
const githubImg = `./src/assets/pictures/github-icon.svg`;

export default function Team() {
  const contacts = [
    {
      name: "Camille Arvieu",
      github: "https://github.com/camillaume",
      linkedin: "https://www.linkedin.com/in/camille-arvieu/",
    },
    {
      name: "Rémi Ménart",
      github: "https://github.com/remi59800",
      linkedin: "https://www.linkedin.com/in/r%C3%A9mi-m%C3%A9nart-4a4461125/",
    },
    {
      name: "Valentin Coppin",
      github: "https://github.com/ValentinCop/",
      linkedin: "https://www.linkedin.com/in/valentincoppin/",
    },
    {
      name: "François Salmon",
      github: "https://github.com/Ashram939",
      linkedin: "https://www.linkedin.com/in/fran%C3%A7ois-salmon-16610b234/",
    },
    {
      name: "Faycel Nasmi",
      github: "https://github.com/n-faycel",
      linkedin: "https://www.linkedin.com/in/faycel-nasmi/",
    },
    {
      name: "Aline Gonce",
      github: "https://github.com/Gonaline",
      linkedin: "https://www.linkedin.com/in/alinegonce/",
    },
  ];
  return (
    <Style>
      <div className="team">
        <h3 className="title">Team</h3>
        <ul>
          {contacts.map((contact) => (
            <li className="contact" key={contact.name}>
              <h2>{contact.name}</h2>
              <div className="links">
                <a
                  href={contact.linkedin}
                  className="link"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img className="icon" src={linkedinImg} alt="linkedin-icon" />
                </a>
                <a
                  href={contact.github}
                  className="link"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img className="icon" src={githubImg} alt="github-icon" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Style>
  );
}
