import FloatingActionButtons from "./FloatingButton";
import ProjectCard from "./ProjectCard";
import "./Projects.scss";

export default function Projects(props) {
  let content = {
    english: {
      title: "My Projects",
    },
    french: {
      title: "Mes Projets",
    },
  };

  props.language === "English"
    ? (content = content.english)
    : (content = content.french);

  return (
    <section id="project">
      <div className="title-button-project">
        <FloatingActionButtons />
      </div>
      <h1 className="title">{content.title}</h1>
      <div className="project-cards">
        <ProjectCard language={props.language} />
      </div>
    </section>
  );
}
