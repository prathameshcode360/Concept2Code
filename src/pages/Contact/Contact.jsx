import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", feedback: "" });
    }, 3000);
  };

  return (
    <main className={styles.contactPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>GET IN TOUCH</p>
          <h1>
            Let's <span>connect.</span>
          </h1>
          <p className={styles.intro}>
            Have a question, project idea, or just want to say hello? I'd love
            to hear from you!
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Contact Form */}
          <div className={styles.formWrapper}>
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="feedback">Feedback / Message</label>
                <textarea
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or feedback..."
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                {submitted ? "✓ Sent!" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className={styles.infoWrapper}>
            <div className={styles.contactInfo}>
              <h2>Contact Information</h2>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📧</div>
                <div>
                  <p className={styles.infoLabel}>Email</p>
                  <a
                    href="mailto:prathameshlink1312@gmail.com"
                    className={styles.infoValue}>
                    prathameshlink1312@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📱</div>
                <div>
                  <p className={styles.infoLabel}>Phone</p>
                  <a href="tel:+918668835905" className={styles.infoValue}>
                    +91-8668835905
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <h2>Connect with Me</h2>
              <div className={styles.socialGrid}>
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialCard} ${styles.linkedin}`}>
                  <div className={styles.socialIcon}>💼</div>
                  <h3>LinkedIn</h3>
                  <p>Connect professionally</p>
                  <span className={styles.socialArrow}>→</span>
                </a>

                <a
                  href="https://github.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialCard} ${styles.github}`}>
                  <div className={styles.socialIcon}>🐙</div>
                  <h3>GitHub</h3>
                  <p>View my projects</p>
                  <span className={styles.socialArrow}>→</span>
                </a>

                <a
                  href="https://code360.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialCard} ${styles.code360}`}>
                  <div className={styles.socialIcon}>💻</div>
                  <h3>Code360</h3>
                  <p>Check my coding profiles</p>
                  <span className={styles.socialArrow}>→</span>
                </a>

                <a
                  href="https://portfolio.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialCard} ${styles.portfolio}`}>
                  <div className={styles.socialIcon}>🌟</div>
                  <h3>Portfolio</h3>
                  <p>See my work</p>
                  <span className={styles.socialArrow}>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
