function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const course = e.target.course.value;
    const message = e.target.message.value;

    const whatsappMessage =
      `Hello SS Technologies Medical Coding Institute,%0A%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Email: ${email}%0A` +
      `Course: ${course}%0A` +
      `Message: ${message}`;

    window.open(
      `https://wa.me/918309751976?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <section className="contact-page">

      <h1>Contact Us</h1>

      <h2>SS Technologies Medical Coding Institute</h2>

      <p>📞 Phone: 8309751976</p>
      <p>📱 WhatsApp: 8309751976</p>
      <p>☎️ Office: 04035024143</p>

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
            placeholder="Phone Number"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
          />

          <select name="course" defaultValue="" required>
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

          <button type="submit">
            💬 Send Enquiry on WhatsApp
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;