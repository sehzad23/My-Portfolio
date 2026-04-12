import Section from "../common/Section";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";

function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A few things I've shipped"
    >
      <div className="grid gap-[32px] md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}

export default ProjectsSection;