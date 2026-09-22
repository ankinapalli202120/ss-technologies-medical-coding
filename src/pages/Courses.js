import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "../styles.css";
import "../css/styles.css";

function Courses() {
  const navigate = useNavigate();
  const [supabaseCourses, setSupabaseCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const { data, error } = await supabase
      .from("courses")
      .select("id, name, description");

    if (error) {
      console.error("Error loading courses:", error);
      return;
    }

    setSupabaseCourses(data || []);
  };

   return (
    <section className="courses-page">
      <h1>Our Courses & Training</h1>

      <p className="section-subtitle">
        Learn Medical Coding, Medical Billing, Healthcare Compliance and
        Revenue Cycle Management.
      </p>

      

      <div className="course-grid">
                {/* Supabase Courses */}

        {supabaseCourses.map((course) => (
          <div className="course-card" key={course.name}>
            <div className="course-icon">🎓</div>

            <h2>{course.name}</h2>

            <div className="course-badge">
              Professional Training
            </div>

            <p>{course.description}</p>
          </div>
        ))}

        {/* Certification Courses */}

        {/* Certification Courses */}

<div className="course-card">
  <div className="course-icon">🩺</div>
  <h2>CPC</h2>
  <div className="course-badge">AAPC Certification</div>

  <p><strong>Duration:</strong> 60 Days</p>
  <p><strong>Focus:</strong> Physician / Professional Coding</p>
  <p><strong>Subjects:</strong> ICD-10-CM • CPT • HCPCS</p>

  <div className="course-payment-options">
    <p><strong>Online Classes: ₹10,000</strong></p>

    <button
      className="payment-button"
      type="button"
      onClick={() =>
        navigate("/ss-technologies-medical-coding/customer-details", {
          state: {
            product: {
              name: "CPC - Online Classes",
              price: 10000,
            },
          },
        })
      }
    >
      Pay Now
    </button>

    <p><strong>Office Classes: ₹15,000</strong></p>

    <button
      className="payment-button"
      type="button"
      onClick={() =>
        navigate("/ss-technologies-medical-coding/customer-details", {
          state: {
            product: {
              name: "CPC - Office Classes",
              price: 15000,
            },
          },
        })
      }
    >
      Pay Now
    </button>
  </div>
</div>


<div className="course-card">
  <div className="course-icon">🏥</div>
  <h2>CCS</h2>
  <div className="course-badge">AHIMA Certification</div>

  <p><strong>Duration:</strong> 90 Days</p>
  <p><strong>Focus:</strong> Inpatient Coding</p>
  <p><strong>Subjects:</strong> ICD-10-CM • CPT • ICD-10-PCS</p>

  <div className="course-payment-options">
    <p><strong>Online Classes: ₹10,000</strong></p>

    <button
      className="payment-button"
      type="button"
      onClick={() =>
        navigate("/ss-technologies-medical-coding/customer-details", {
          state: {
            product: {
              name: "CCS - Online Classes",
              price: 10000,
            },
          },
        })
      }
    >
      Pay Now
    </button>

    <p><strong>Office Classes: ₹15,000</strong></p>

    <button
      className="payment-button"
      type="button"
      onClick={() =>
        navigate("/ss-technologies-medical-coding/customer-details", {
          state: {
            product: {
              name: "CCS - Office Classes",
              price: 15000,
            },
          },
        })
      }
    >
      Pay Now
    </button>
  </div>
</div>


<div className="course-card">
  <div className="course-icon">📊</div>
  <h2>CRC</h2>
  <div className="course-badge">AAPC Certification</div>

  <p><strong>Duration:</strong> 60 Days</p>
  <p><strong>Focus:</strong> HCC & Risk Adjustment</p>
  <p><strong>Subjects:</strong> ICD-10-CM • HCC • Risk Adjustment</p>

  <div className="course-payment-options">
    <p><strong>Online Classes: ₹10,000</strong></p>

    <button
      className="payment-button"
      type="button"
      onClick={() =>
        navigate("/ss-technologies-medical-coding/customer-details", {
          state: {
            product: {
              name: "CRC - Online Classes",
              price: 10000,
            },
          },
        })
      }
    >
      Pay Now
    </button>

    <p><strong>Office Classes: ₹15,000</strong></p>

    <button
      className="payment-button"
      type="button"
      onClick={() =>
        navigate("/ss-technologies-medical-coding/customer-details", {
          state: {
            product: {
              name: "CRC - Office Classes",
              price: 15000,
            },
          },
        })
      }
    >
      Pay Now
    </button>
  </div>
</div>


<div className="course-card">
  <div className="course-icon">👨‍⚕️</div>
  <h2>CCS-P</h2>
  <div className="course-badge">AHIMA Certification</div>

  <p><strong>Duration:</strong> 60 Days</p>
  <p><strong>Focus:</strong> Physician / Professional Coding</p>
  <p><strong>Subjects:</strong> ICD-10-CM • CPT</p>

  <div className="course-payment-options">
    <p><strong>Online Classes: ₹10,000</strong></p>

    <button
      className="payment-button"
      type="button"
      onClick={() =>
        navigate("/ss-technologies-medical-coding/customer-details", {
          state: {
            product: {
              name: "CCS-P - Online Classes",
              price: 10000,
            },
          },
        })
      }
    >
      Pay Now
    </button>

    <p><strong>Office Classes: ₹15,000</strong></p>

    <button
      className="payment-button"
      type="button"
      onClick={() =>
        navigate("/ss-technologies-medical-coding/customer-details", {
          state: {
            product: {
              name: "CCS-P - Office Classes",
              price: 15000,
            },
          },
        })
      }
    >
      Pay Now
    </button>
  </div>
</div>


<div className="course-card">
  <div className="course-icon">📋</div>
  <h2>CDIP</h2>
  <div className="course-badge">AHIMA Certification</div>

  <p><strong>Duration:</strong> 60 Days</p>
  <p><strong>Focus:</strong> Clinical Documentation Improvement</p>
  <p>
    <strong>Training:</strong> CDI • Documentation • Inpatient Concepts
  </p>

  <div className="course-payment-options">
    <p><strong>Online Classes: ₹20,000</strong></p>
    <p>🌍 Pan India & International Students</p>

    <button
      className="payment-button"
      type="button"
      onClick={() =>
        navigate("/ss-technologies-medical-coding/customer-details", {
          state: {
            product: {
              name: "CDIP - Online Classes",
              price: 20000,
            },
          },
        })
      }
    >
      Pay Now
    </button>
  </div>
</div>
{/* Digital Skills - Excel */}
<div className="course-card">
  <div className="course-icon">📊</div>
  <h2>Excel Training</h2>

  <div className="course-badge">Digital Skills Training</div>

  <p><strong>Focus:</strong> Microsoft Excel Practical Training</p>
  <p>Excel Basics • Formulas • Functions</p>
  <p>Data Management • Tables • Reports</p>
  <p>Practical Office & Business Applications</p>

  <p className="course-price">
    <strong>₹999</strong>
  </p>

  <button
    className="join-btn"
    onClick={() =>
      navigate("/ss-technologies-medical-coding/customer-details", {
        state: {
          product: {
            name: "Excel Training",
            price: 999,
            category: "Digital Skills Training",
          },
        },
      })
    }
  >
    Buy Now
  </button>
</div>

{/* Digital Skills - Website Design */}
<div className="course-card">
  <div className="course-icon">🌐</div>
  <h2>Website Design</h2>

  <div className="course-badge">Digital Skills Training</div>

  <p><strong>Focus:</strong> Website Design & Development Basics</p>
  <p>HTML • CSS • Website Structure</p>
  <p>Responsive Design • Basic Web Development</p>
  <p>Practical Website Creation</p>

  <p className="course-price">
    <strong>₹1,999</strong>
  </p>

  <button
    className="join-btn"
    onClick={() =>
      navigate("/ss-technologies-medical-coding/customer-details", {
        state: {
          product: {
            name: "Website Design",
            price: 1999,
            category: "Digital Skills Training",
          },
        },
      })
    }
  >
    Buy Now
  </button>
</div>
        {/* Medical Coding */}

        <div className="course-card">
          <div className="course-icon">🧾</div>
          <h2>Medical Coding</h2>
          <div className="course-badge">Professional Training</div>
          <p><strong>Topics:</strong></p>
          <p>ICD-10-CM • CPT • HCPCS • ICD-10-PCS</p>
          <p>Medical Terminology • Anatomy & Physiology</p>
        </div>
                

        {/* Medical Billing */}

        <div className="course-card">
          <div className="course-icon">💳</div>
          <h2>Medical Billing</h2>
          <div className="course-badge">Professional Training</div>
          <p><strong>Focus:</strong> Healthcare Claims & Billing</p>
          <p>Claims Processing • Billing • Denials</p>
          <p>Revenue Cycle Management</p>
        </div>

        {/* Medicare */}

        <div className="course-card">
          <div className="course-icon">🏛️</div>
          <h2>Medicare</h2>
          <div className="course-badge">Healthcare Training</div>
          <p><strong>Topics:</strong></p>
          <p>Medicare Basics • Coverage • Claims</p>
          <p>Medicare Billing Concepts</p>
        </div>

        {/* Medicaid */}

        <div className="course-card">
          <div className="course-icon">🏥</div>
          <h2>Medicaid</h2>
          <div className="course-badge">Healthcare Training</div>
          <p><strong>Topics:</strong></p>
          <p>Medicaid Basics • Eligibility • Claims</p>
          <p>Billing & Reimbursement Concepts</p>
        </div>

        {/* RCM */}

        <div className="course-card">
          <div className="course-icon">🔄</div>
          <h2>Revenue Cycle Management</h2>
          <div className="course-badge">RCM Training</div>
          <p><strong>Topics:</strong></p>
          <p>Patient Registration • Charge Capture</p>
          <p>Claims • Payments • Denials • AR</p>
        </div>

        {/* E/M */}

        <div className="course-card">
          <div className="course-icon">🩻</div>
          <h2>E/M Coding</h2>
          <div className="course-badge">Coding Training</div>
          <p><strong>Focus:</strong> Evaluation & Management</p>
          <p>E/M Guidelines • Documentation</p>
          <p>Professional Coding Concepts</p>
        </div>

        {/* HCC */}

        <div className="course-card">
          <div className="course-icon">📈</div>
          <h2>HCC</h2>
          <div className="course-badge">Risk Adjustment</div>
          <p><strong>Focus:</strong> Hierarchical Condition Categories</p>
          <p>Risk Adjustment • Diagnosis Coding</p>
          <p>Documentation Concepts</p>
        </div>

        {/* Compliance */}

        <div className="course-card">
          <div className="course-icon">⚖️</div>
          <h2>Healthcare Compliance</h2>
          <div className="course-badge">Compliance Training</div>
          <p><strong>Topics:</strong></p>
          <p>HIPAA • HIM • OIG • ABN • OPPS</p>
          <p>Healthcare compliance and regulatory concepts.</p>
        </div>

        {/* ABN */}

        <div className="course-card">
          <div className="course-icon">📄</div>
          <h2>ABN</h2>
          <div className="course-badge">Healthcare Compliance</div>
          <p><strong>Focus:</strong> Advance Beneficiary Notice</p>
          <p>ABN concepts • Patient notices</p>
          <p>Medicare compliance concepts</p>
        </div>

        {/* OPPS */}

        <div className="course-card">
          <div className="course-icon">🏨</div>
          <h2>OPPS</h2>
          <div className="course-badge">Billing & Reimbursement</div>
          <p><strong>Focus:</strong> Outpatient Prospective Payment System</p>
          <p>Outpatient services • Payment concepts</p>
          <p>Hospital billing fundamentals</p>
        </div>

        {/* HIPAA */}

        <div className="course-card">
          <div className="course-icon">🔐</div>
          <h2>HIPAA</h2>
          <div className="course-badge">Healthcare Compliance</div>
          <p><strong>Topics:</strong></p>
          <p>Privacy • Security • Protected Health Information</p>
          <p>Healthcare compliance fundamentals</p>
        </div>

        {/* HIM */}

        <div className="course-card">
          <div className="course-icon">📚</div>
          <h2>HIM</h2>
          <div className="course-badge">Health Information Management</div>
          <p><strong>Topics:</strong></p>
          <p>Health Records • Documentation</p>
          <p>Health Information Management Concepts</p>
        </div>

        {/* Forms & Claims */}

        <div className="course-card">
          <div className="course-icon">📝</div>
          <h2>Healthcare Forms</h2>
          <div className="course-badge">Practical Training</div>
          <p><strong>Topics:</strong></p>
          <p>Claims Forms • Billing Forms</p>
          <p>Healthcare Documentation & Forms</p>
        </div>

        {/* Claims */}

        <div className="course-card">
          <div className="course-icon">💰</div>
          <h2>Claims Processing</h2>
          <div className="course-badge">Billing Training</div>
          <p><strong>Focus:</strong> Healthcare Claims</p>
          <p>Claim Submission • Adjudication</p>
          <p>Denials • Payments • Follow-up</p>
        </div>

      </div>
    </section>
  );
}

export default Courses;