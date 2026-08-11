function Forms() {
  return (
    <section className="forms-page">
      <h1>Healthcare Forms</h1>

      <p className="section-subtitle">
        Learn and understand commonly used healthcare, medical billing and
        documentation forms.
      </p>

      <div className="course-grid">

        <div className="course-card">
          <div className="course-icon">📝</div>
          <h2>Medical Billing Forms</h2>
          <p>
            Training on commonly used medical billing and healthcare
            documentation forms.
          </p>
        </div>

        <div className="course-card">
          <div className="course-icon">💳</div>
          <h2>Claims Forms</h2>
          <p>
            Learn healthcare claim form concepts, claim submission and
            billing documentation.
          </p>
        </div>

        <div className="course-card">
          <div className="course-icon">📄</div>
          <h2>ABN Forms</h2>
          <p>
            Learn Advance Beneficiary Notice concepts and related
            Medicare documentation.
          </p>
        </div>

        <div className="course-card">
          <div className="course-icon">🏥</div>
          <h2>Healthcare Documentation</h2>
          <p>
            Understand medical records, documentation and healthcare
            information management concepts.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Forms;