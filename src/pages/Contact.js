import { useState } from "react";
import { supabase } from "../supabaseClient";
import "../styles.css";

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    const form = e.target;

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const course = form.course.value;
    const message = form.message.value.trim();

    // Basic phone validation
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
      setStatus("❌ Please enter a valid 10-digit phone number.");
      return;
    }

    setSubmitting(true);
    setStatus("");

    try {
      // Save enquiry to Supabase
      const { error } = await supabase
        .from("enquiries")
        .insert([
          {
            name,
            phone,
            email,
            course,
            message,
          },
        ]);

      if (error) {
        console.error("Supabase error:", error);
        setStatus("❌ Enquiry save కాలేదు. Please try again.");
        setSubmitting(false);
        return;
      }

      // WhatsApp message
      const whatsappMessage = `Hello SARAVU Medical Coding & AI Creator,

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Course: ${course}
Message: ${message || "No message"}`;

      const whatsappURL = `https://wa.me/918309751976?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      setStatus(
        "✅ Enquiry submitted successfully! Opening WhatsApp..."
      );

      window.open(whatsappURL, "_blank");

      form.reset();
    } catch (error) {
      console.error("Unexpected error:", error);
      setStatus("❌ Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-page">

      {/* CONTACT HEADER */}
      <h1>Contact Us</h1>

      <h2>SARAVU Medical Coding & AI Creator</h2>

      <p>📞 Phone: 8309751976</p>

      <p>📱 WhatsApp: 8309751976</p>

      <p>☎️ Office: 04035024143</p>

      {/* ADDRESS */}
      <h2>📍 Our Address</h2>

      <p>
        H.No.16-2-738/13/11-9,
        <br />
        Flat No.1, Viswa Lakshmi Apartment,
        <br />
        Asmangad, Malakpet,
        <br />
        Hyderabad, Telangana - 500036, India
      </p>

      {/* SOCIAL LINKS */}
      <div className="social-links">

        <h2>Connect With Us</h2>

        <a
          href="https://wa.me/918309751976"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 WhatsApp
        </a>

        <a
          href="https://www.facebook.com/saraswathi.ankinapalli9"
          target="_blank"
          rel="noopener noreferrer"
        >
          📘 Facebook
        </a>

        <a
          href="https://www.instagram.com/ankin_apalli/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📸 Instagram
        </a>

      </div>

      {/* GOOGLE MAPS */}
      <div className="map-section">

        <h2>📍 Find Us on Google Maps</h2>

        <a
          href="https://www.google.com/maps/search/?api=1&query=H.No.16-2-738%2F13%2F11-9%2C+Flat+No.1%2C+Viswa+Lakshmi+Apartment%2C+Asmangad%2C+Malakpet%2C+Hyderabad%2C+Telangana+500036"
          target="_blank"
          rel="noopener noreferrer"
        >
          🗺️ Open Location in Google Maps
        </a>

      </div>

      {/* ENQUIRY FORM */}
      <div className="enquiry-section">

        <h2>📝 Enquiry Form</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="10-Digit Phone Number"
            maxLength="10"
            inputMode="numeric"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
          />

          <select
            name="course"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select Course
            </option>

            <option>CPC</option>
            <option>CCS</option>
            <option>CRC</option>
            <option>CCS-P</option>
            <option>CDIP</option>
            <option>Medical Coding</option>
            <option>Medical Billing</option>
            <option>Medicare</option>
            <option>Medicaid</option>
            <option>RCM</option>
            <option>E/M Coding</option>
            <option>HCC</option>
            <option>Healthcare Compliance</option>
            <option>Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
          ></textarea>

          {/* STATUS */}
          {status && (
            <p
              style={{
                marginTop: "12px",
                marginBottom: "12px",
                fontWeight: "600",
              }}
            >
              {status}
            </p>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={submitting}
          >
            {submitting
              ? "⏳ Sending..."
              : "💬 Send Enquiry on WhatsApp"}
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;