import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import "../css/styles.css";

function About() {
  return (
    <section className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <div className="about-hero-content">
          <span className="about-label">ABOUT SARAVU</span>

          <h1>
            Learn Skills.
            <span> Build Confidence.</span>
            Grow Your Career.
          </h1>

          <p>
            SARAVU Medical Coding & AI Digital Skills is focused on practical
            training in Medical Coding, Healthcare, AI and modern digital
            skills.
          </p>
        </div>
      </div>

      {/* TRAINING AREAS */}
      <div className="about-container">

        <div className="about-section-heading">
          <span>WHAT WE OFFER</span>
          <h2>Learn. Practice. Grow.</h2>
          <p>
            Our training programs are designed to help learners build
            practical knowledge and career-ready skills.
          </p>
        </div>

        <div className="about-feature-grid">

          <div className="about-feature-card">
            <div className="about-icon">🩺</div>
            <h3>Medical Coding Training</h3>
            <p>
              Learn ICD-10-CM, CPT, HCPCS, ICD-10-PCS, medical terminology,
              anatomy and practical healthcare coding concepts.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="about-icon">🎓</div>
            <h3>Certification Preparation</h3>
            <p>
              Structured preparation for professional certification paths
              including CPC, CCS, CRC, CCS-P and CDIP.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="about-icon">💻</div>
            <h3>Healthcare & RCM Skills</h3>
            <p>
              Build practical knowledge in Medical Billing, Revenue Cycle
              Management, Medicare, Medicaid, Claims and Healthcare
              Compliance.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="about-icon">🤖</div>
            <h3>AI & Digital Skills</h3>
            <p>
              Learn AI tools, AI content creation, image and video creation,
              MS Excel, MS Word, PowerPoint and website basics.
            </p>
          </div>

        </div>

        {/* MISSION */}
        <div className="about-mission">
          <div>
            <span>OUR MISSION</span>
            <h2>Practical Learning for a Better Future</h2>
          </div>

          <p>
            Our mission is to provide practical, easy-to-understand training
            that helps learners develop professional knowledge, confidence
            and career-ready skills.
          </p>
        </div>

        {/* WHY SARAVU */}
        <div className="about-why">

          <div className="about-why-content">
            <span>WHY CHOOSE SARAVU?</span>

            <h2>
              More Than Training.
              <br />
              We Build Career Skills.
            </h2>

            <p>
              We focus on practical knowledge, professional skills and
              continuous learning to help students prepare for today's
              healthcare and digital environment.
            </p>
          </div>

          <div className="about-check-list">
            <div>✓ Practical and easy-to-understand training</div>
            <div>✓ Medical Coding and healthcare-focused learning</div>
            <div>✓ Certification examination preparation</div>
            <div>✓ AI and modern digital skills</div>
            <div>✓ Career-focused learning approach</div>
            <div>✓ Continuous learning and skill development</div>
          </div>

        </div>

        {/* CTA */}
        <div className="about-cta">
          <span>START YOUR JOURNEY</span>

          <h2>Ready to Build Your Professional Skills?</h2>

          <p>
            Explore our courses and take the next step toward building your
            professional skills.
          </p>

          <Link to="/ss-technologies-medical-coding/courses">
            Explore Courses →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default About;