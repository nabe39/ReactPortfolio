import { project1, project2 } from "../assets/images";
import Card from "../components/Card";
const project = [
  {
    imgSrc: project1,
    title: "Practice-HTML-CSS",
    description:
      "This is a responsive website built with modern frontend tools. It uses the Sass 7-1 pattern for cleaner, reusable code and follows responsive design to work well on all screen sizes.",
  },
  {
    imgSrc: project2,
    title: "Portfolio",
    description:
      "This is my personal portfolio website to showcase my skills, projects, and background as a front-end developer. It is built using modern web technologies with a focus on responsive design and smooth user experience.",
  },
];
export default function Projects() {
  return (
    <section className="projects">
      <div className="title">Lastes Work</div>
      <div className="project-cards cards">
        {project.map((item) => (
          <Card
            key={item.title}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
