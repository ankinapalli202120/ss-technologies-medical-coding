function Home() {
  return (
    <section className="home-page">

      <div className="hero-content">

        <p className="hero-small">
          WELCOME TO SS TECHNOLOGIES
        </p>

        <h1>
          Master <span>Medical Coding</span>
          <br />
          Build Your Career
        </h1>

        <p className="hero-description">
          Professional training for medical coding,
          certification exams, medical billing and
          healthcare careers.
        </p>

        <div className="hero-buttons">

          <a href="/courses" className="hero-button">
            📚 Explore Courses
          </a>

          <a
            href="https://wa.me/918309751976"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            💬 Join Now
          </a>

        </div>

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
            <strong>💼</strong>
            <span>Career Focused</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;