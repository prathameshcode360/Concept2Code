import styles from "./PlatformIntro.module.css";

const PlatformIntro = () => {
  return (
    <section className={styles.platformIntro}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>ABOUT CONCEPT2CODE</p>

          <h2>
            Learn fundamentals by
            <span> building.</span>
          </h2>
        </div>

        <div className={styles.content}>
          <p>
            Concept2Code is a project-based learning platform where you learn
            software development concepts by actually building small, focused
            projects.
          </p>

          <p>
            Instead of simply reading about a concept, you will use it in a
            practical project, understand why it works, and see how different
            concepts come together to build real applications.
          </p>

          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <span className={styles.number}>01</span>
              <div>
                <h3>Learn the Concept</h3>
                <p>Understand the fundamentals before jumping into code.</p>
              </div>
            </div>

            <div className={styles.highlight}>
              <span className={styles.number}>02</span>
              <div>
                <h3>Build a Mini Project</h3>
                <p>Put the concept into practice through a focused project.</p>
              </div>
            </div>

            <div className={styles.highlight}>
              <span className={styles.number}>03</span>
              <div>
                <h3>Understand the Why</h3>
                <p>
                  Go beyond syntax and understand the decisions behind the code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformIntro;
