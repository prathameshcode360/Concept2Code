import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div>
            <a href="/" className={styles.logo}>
              Concept2Code
            </a>

            <p className={styles.tagline}>
              Learn concepts. Build projects. Understand the why.
            </p>
          </div>

          <div className={styles.links}>
            <a href="/about">About Me</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Concept2Code. Built with curiosity and code.</p>

          <div className={styles.socials}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub">
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
