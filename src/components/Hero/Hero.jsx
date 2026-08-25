// Hero.jsx
import styles from "./Hero.module.css";
import HeroImage from "../../assets/Hero.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>LEARN BY BUILDING</p>

          <h1>
            Understand the
            <span> concepts.</span>
            <br />
            Build the projects.
          </h1>

          <p className={styles.inspiration}>
            AI can generate code, but great software isn't generated.
            <strong> It is engineered.</strong>
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={HeroImage}
            alt="Developer working with code"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
