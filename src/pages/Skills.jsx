import Card from "../components/Card";
import {
  attitude,
  feedback,
  workTogether,
  HTML,
  CSS,
  GitHub,
  Javascript,
} from "../assets/images";

const softSkills = [
  {
    imgSrc: attitude,
    title: "Professional Attitude",
    description:
      "Takes work seriously with a strong sense of responsibility. Maintains a disciplined, focused, and respectful approach in all tasks.",
  },
  {
    imgSrc: feedback,
    title: "Receptiveness to Feedback",
    description:
      "Open to constructive feedback and actively uses it to improve performance, skills, and teamwork effectiveness.",
  },
  {
    imgSrc: workTogether,
    title: "Teamwork",
    description:
      "Respect others’ opinions and support team members to achieve shared goals.",
  },
];
const techSkills = [
  {
    imgSrc: HTML,
    title: "HTML",
    description:
      "Can create simple web pages using headings, text, links, images, and forms. Understands basic structure and tags. Able to write clean and clear code for beginner-level projects.",
  },
  {
    imgSrc: CSS,
    title: "CSS & SASS",
    description:
      "OCan style web pages with colors, fonts, spacing, and layout. Knows how to use selectors, classes, and IDs. Able to build basic responsive designs using Flexbox and Grid.",
  },
  {
    imgSrc: GitHub,
    title: "Git & GitHub",
    description:
      "Can use Git to track code changes, commit updates, and work with repositories. Knows basic commands like git add, commit, push, and pull. Able to collaborate using GitHub.",
  },
  {
    imgSrc: Javascript,
    title: "JavaScript",
    description: "Comming soon....",
  },
];
export default function Skills() {
  return (
    <section className="skills">
      <div className="soft-skills cards">
        {softSkills.map((item) => (
          <Card
            key={item.title}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="tech-skills cards">
        {techSkills.map((item) => (
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
