import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">

      {/* HERO */}
      <div className="hero-content">

        <p className="hero-small">
          WELCOME TO SARAVU
        </p>

        <h1>
          Master <span>Medical Coding</span>
          <br />
          Build Your Career
        </h1>

        <p className="hero-description">
          Professional training in Medical Coding, AI,
          Digital Skills, Certification Preparation and
          Career Development.
        </p>

        <div className="hero-buttons">

          <Link
            to="/ss-technologies-medical-coding/courses"
            className="hero-button"
          >
            📚 Explore Courses
          </Link>

          <a
  href="https://wa.me/918309751976"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-button"
>
  WhatsApp
</a>

<a
  href="/ss-technologies-medical-coding/contact"
  className="hero-button join"
>
  💬 Join Now
</a>

</div>
        

        {/* FEATURES */}
        <div className="hero-features">

          <div>
            <strong>🎓</strong>
            <span>Professional Training</span>
          </div>

          <div>
            <strong>📚</strong>
            <span>Certification Preparation</span>
          </div>

          <div>
            <strong>🤖</strong>
            <span>AI & Digital Skills</span>
          </div>

        </div>

        {/* SOCIAL */}
        <div className="social-section">

          <p className="social-small">
            CONNECT WITH SARAVU
          </p>

          <h2>
            Follow Us on Social Media
          </h2>

          <p className="social-description">
            Follow Saravu for Medical Coding, AI,
            Career Guidance and Educational Content.
          </p>

          <div className="social-buttons">

            <a
              href="https://www.youtube.com/@SaravuMedicalCodingAICreator"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button youtube"
            >
              🎥 Visit My YouTube
            </a>

            <a
              href="https://www.facebook.com/share/saravumedicalcoingaicreator"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button facebook"
            >
              📘 Follow on Facebook
            </a>

            <a
              href="https://www.instagram.com/ankin_apalli/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button instagram"
            >
              📸 Follow on Instagram
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;