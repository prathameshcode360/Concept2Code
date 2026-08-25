import { Link } from "react-router-dom";
import styles from "./ExploreProjects.module.css";

const ExploreProjects = () => {
  return (
    <section className={styles.explore}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>YOUR JOURNEY STARTS HERE</p>

        <h2>
          Ready to <span>explore?</span>
        </h2>

        <p className={styles.description}>
          Start with a project, learn the fundamentals, and gradually build your
          understanding one concept at a time.
        </p>

        <Link to="/projects" className={styles.button}>
          View Projects
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
};

export default ExploreProjects;
