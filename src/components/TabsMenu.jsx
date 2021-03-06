import "./TabsMenu.scss";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { HashLink } from "react-router-hash-link";


export default function TabsMenu(props) {

  let content = {
    english: {
      project: "projects",
      skill: "skills",
      contact: "contact",
      cv: "resume",
    },
    french: {
      project: "projets",
      skill: "compétences",
      contact: "contact",
      cv: "CV",
    },
  };

  props.language === "English"
    ? (content = content.english)
    : (content = content.french);

  return (
    <div className="page">
      <nav className="page__menu menu">
        <ul className="menu__list r-list">
          <li className="menu__group">
            <HashLink
              smooth
              to="#project"
              className="menu__link r-link text-underlined"
            >
              {content.project}
            </HashLink>
          </li>
          <li className="menu__group">
            <HashLink
              smooth
              to="#skills"
              className="menu__link r-link text-underlined"
            >
              {content.skill}
            </HashLink>
          </li>
          <li className="menu__group">
            <HashLink
              smooth
              to="#contact"
              className="menu__link r-link text-underlined"
            >
              {content.contact}
            </HashLink>
          </li>
          <li className="menu__group">
            <a
              href="https://www.canva.com/design/DAERGl5eu-Y/qM8RzslwTKL7Mk0_lwDmYg/view"
              className="menu__link r-link text-underlined"
              target="_blank"
              rel="noreferrer"
            >
              {content.cv}
            </a>
          </li>
          <li className="menu__group">
            <a
              href="https://www.linkedin.com/in/raphellepaquet/"
              className="menu__link r-link text-underlined"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li className="language">
            <select
              className="custom-select"
              value={props.language}
              onChange={(e) => props.handleSetLanguage(e.target.value)}
            >
              <option value="English">En</option>
              <option value="French">Fr</option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  );
}
