import { useState } from "react";
import { Link } from "react-router-dom";
import { learningProjects } from "../../data/projects.js";
import styles from "./ProjectsPage.module.css";

const ProjectsPage = () => {
  const categories = Object.keys(learningProjects);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const selectedCategory = learningProjects[activeCategory];

  return (
    <main className={styles.projectsPage}>
      <section className={styles.header}>
        <p className={styles.eyebrow}>CONCEPT2CODE</p>

        <h1>
          Learn by <span>building.</span>
        </h1>

        <p className={styles.intro}>
          Explore small projects built to understand programming concepts,
          technologies, and software development fundamentals through hands-on
          practice.
        </p>
      </section>

      <section className={styles.projectsSection}>
        <div className={styles.categories}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.categoryButton} ${
                activeCategory === category ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category)}>
              {category}
            </button>
          ))}
        </div>

        <div className={styles.categoryInfo}>
          <h2>{activeCategory}</h2>
          <p>{selectedCategory.description}</p>
        </div>

        {selectedCategory.projects.length > 0 ? (
          <div className={styles.projectsGrid}>
            {selectedCategory.projects.map((project) => (
              <article key={project.id} className={styles.projectCard}>
                <div className={styles.imageWrapper}>
                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    className={styles.projectImage}
                  />
                </div>

                <div className={styles.projectContent}>
                  <h3>{project.title}</h3>

                  <div className={styles.techTags}>
                    {project.tech.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  <div className={styles.actions}>
                    <Link
                      to={`/project/${project.id}`}
                      className={styles.detailsButton}>
                      View Details
                      <span aria-hidden="true">→</span>
                    </Link>

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondaryButton}>
                        GitHub
                      </a>
                    )}

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondaryButton}>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h3>Projects coming soon</h3>
            <p>
              This section is currently being built. More learning projects will
              be added soon.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default ProjectsPage;
