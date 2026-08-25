import { Link, useParams } from "react-router-dom";
import { learningProjects } from "../../data/projects.js";
import styles from "./ProjectPage.module.css";

const ProjectPage = () => {
  const { projectId } = useParams();

  let project = null;
  let category = "";

  Object.entries(learningProjects).some(([categoryName, categoryData]) => {
    const foundProject = categoryData.projects.find(
      (item) => item.id === projectId,
    );

    if (foundProject) {
      project = foundProject;
      category = categoryName;
      return true;
    }

    return false;
  });

  if (!project) {
    return (
      <main className={styles.notFound}>
        <p className={styles.eyebrow}>PROJECT NOT FOUND</p>

        <h1>We couldn't find this project.</h1>

        <p>
          The project you're looking for may have been removed or the URL may be
          incorrect.
        </p>

        <Link to="/projects" className={styles.backButton}>
          ← Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className={styles.projectPage}>
      <div className={styles.container}>
        <Link to="/projects" className={styles.backLink}>
          ← Back to Projects
        </Link>

        <header className={styles.header}>
          <p className={styles.category}>{category}</p>

          <h1>{project.title}</h1>

          <p className={styles.description}>{project.description}</p>

          <div className={styles.techTags}>
            {project.tech.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.actions}>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}>
                View Code ↗
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}>
                Live Demo ↗
              </a>
            )}
          </div>
        </header>

        <div className={styles.heroImage}>
          <img src={project.image} alt={project.title} />
        </div>

        <section className={styles.learningSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>WHAT YOU WILL LEARN</p>

            <h2>Learn by understanding the implementation.</h2>
          </div>

          <div className={styles.learningContent}>
            <p>
              This project is designed to help you understand the concepts
              behind the technology instead of simply copying an existing
              application.
            </p>

            <p>
              Build the project yourself, experiment with the implementation,
              and use the result as a practical reference for understanding the
              underlying fundamentals.
            </p>
          </div>
        </section>

        <section className={styles.conceptsSection}>
          <p className={styles.eyebrow}>PROJECT CONCEPTS</p>

          <h2>Technologies used</h2>

          <div className={styles.conceptGrid}>
            {project.tech.map((tech, index) => (
              <div key={tech} className={styles.conceptCard}>
                <span>0{index + 1}</span>
                <h3>{tech}</h3>
                <p>
                  Explore how {tech} is used as part of this project and
                  understand its role in the overall implementation.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.nextSection}>
          <p className={styles.eyebrow}>KEEP LEARNING</p>

          <h2>Ready for another project?</h2>

          <Link to="/projects" className={styles.backButton}>
            Explore All Projects →
          </Link>
        </section>
      </div>
    </main>
  );
};

export default ProjectPage;
