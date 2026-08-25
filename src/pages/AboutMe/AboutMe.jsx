import styles from "./About.module.css";
import profileImage from "../../assets/MY_PHOTO.png"; // Add your image path

const AboutMe = () => {
  return (
    <main className={styles.aboutPage}>
      <div className={styles.container}>
        {/* Profile Section */}
        <section className={styles.profileSection}>
          <div className={styles.profileImageWrapper}>
            <img
              src={profileImage}
              alt="Prathamesh Mhatugade"
              className={styles.profileImage}
            />
          </div>

          <div className={styles.profileContent}>
            <p className={styles.eyebrow}>ABOUT ME</p>
            <h1>Prathamesh Mhatugade</h1>
            <p className={styles.title}>
              Software Developer — Full-Stack Developer — AI & ML Engineer
            </p>

            <div className={styles.summary}>
              <p>
                Software Developer with experience in designing and developing
                scalable software applications using full-stack technologies and
                AI-driven solutions. Skilled in building secure, responsive, and
                maintainable applications with expertise in frontend and backend
                development, RESTful APIs, databases, and Generative AI. Strong
                foundation in software engineering principles.
              </p>
            </div>

            <div className={styles.experience}>
              <h3>Freelance Software Engineer</h3>
              <ul>
                <li>
                  Delivered 10+ custom software solutions, including full-stack
                  web applications, AI-powered applications, and desktop
                  software by understanding client requirements and translating
                  them into reliable technical solutions.
                </li>
                <li>
                  Designed and developed scalable applications using modern
                  software engineering practices, implementing responsive user
                  interfaces, RESTful APIs, authentication, database
                  integration, and clean, maintainable code.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.skillsSection}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>EXPERTISE</p>
            <h2>Technical Skills</h2>
          </div>

          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <h3>Languages</h3>
              <div className={styles.skillTags}>
                <span>JavaScript (ES6+)</span>
                <span>Java</span>
                <span>Python</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3>Frontend</h3>
              <div className={styles.skillTags}>
                <span>React.js</span>
                <span>Redux Toolkit</span>
                <span>React Router</span>
                <span>Context API</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Bootstrap</span>
                <span>Responsive Web Design</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3>Backend</h3>
              <div className={styles.skillTags}>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>RESTful APIs</span>
                <span>JWT Authentication</span>
                <span>Socket.IO</span>
                <span>Swagger</span>
                <span>MVC Architecture</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3>Databases</h3>
              <div className={styles.skillTags}>
                <span>MongoDB</span>
                <span>MySQL</span>
                <span>Firebase</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3>AI / ML</h3>
              <div className={styles.skillTags}>
                <span>Generative AI</span>
                <span>LangChain</span>
                <span>RAG</span>
                <span>Gemini API</span>
                <span>NLP</span>
                <span>Deep Learning</span>
                <span>TensorFlow</span>
                <span>OpenCV</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3>Tools</h3>
              <div className={styles.skillTags}>
                <span>Git</span>
                <span>GitHub</span>
                <span>Postman</span>
                <span>MongoDB Atlas</span>
                <span>VS Code</span>
                <span>Vite</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className={styles.educationSection}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>ACADEMICS</p>
            <h2>Education</h2>
          </div>

          <div className={styles.educationGrid}>
            <div className={styles.educationCard}>
              <div className={styles.educationIcon}>🎓</div>
              <div className={styles.educationContent}>
                <h3>Bachelor of Engineering</h3>
                <p className={styles.eduField}>
                  Artificial Intelligence & Machine Learning
                </p>
                <p className={styles.eduInstitution}>
                  SSPM College of Engineering, Kankavali
                </p>
                <p className={styles.eduYear}>2023 – 2026</p>
                <div className={styles.eduCgpa}>
                  <span>CGPA: 7.20</span>
                </div>
              </div>
            </div>

            <div className={styles.educationCard}>
              <div className={styles.educationIcon}>📘</div>
              <div className={styles.educationContent}>
                <h3>Diploma</h3>
                <p className={styles.eduField}>Computer Engineering</p>
                <p className={styles.eduInstitution}>
                  Vidya Vardhini Institute of Technology, Pal
                </p>
                <p className={styles.eduYear}>2021 – 2023</p>
                <div className={styles.eduPercentage}>
                  <span>Percentage: 79.40%</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutMe;
