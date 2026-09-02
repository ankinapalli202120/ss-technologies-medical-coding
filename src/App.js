import React from "react";
import "./css/styles.css";

import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Forms from "./pages/Forms";
import Complaints from "./pages/Complaints";
import RecordClass from "./pages/RecordClass";
import AdminEnquiries from "./pages/AdminEnquiries";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">

        <div className="logo">
          <Link to="/ss-technologies-medical-coding/">
            <img
              src="/ss-technologies-medical-coding/saravu-logo.png"
              alt="SARAVU Medical Coding & AI Creator"
            />
          </Link>
        </div>

        <nav>

          <Link to="/ss-technologies-medical-coding/">
            Home
          </Link>

          <Link to="/ss-technologies-medical-coding/courses">
            Courses
          </Link>

          <Link to="/ss-technologies-medical-coding/about">
            About
          </Link>

          <Link to="/ss-technologies-medical-coding/forms">
            Forms
          </Link>

          <Link to="/ss-technologies-medical-coding/complaints">
            Complaints
          </Link>

          <Link to="/ss-technologies-medical-coding/record-class">
            Record Classes
          </Link>

          <Link to="/ss-technologies-medical-coding/contact">
            Contact
          </Link>

        </nav>

      </header>

      {/* PAGES */}
      <Routes>

        {/* ADMIN LOGIN */}
        <Route
          path="/ss-technologies-medical-coding/admin-login"
          element={<AdminLogin />}
        />

        {/* ADMIN ENQUIRIES */}
        <Route
          path="/ss-technologies-medical-coding/admin-enquiries"
          element={<AdminEnquiries />}
        />

        {/* HOME */}
        <Route
          path="/ss-technologies-medical-coding/"
          element={<Home />}
        />

        {/* COURSES */}
        <Route
          path="/ss-technologies-medical-coding/courses"
          element={<Courses />}
        />

        {/* ABOUT */}
        <Route
          path="/ss-technologies-medical-coding/about"
          element={<About />}
        />

        {/* FORMS */}
        <Route
          path="/ss-technologies-medical-coding/forms"
          element={<Forms />}
        />

        {/* COMPLAINTS */}
        <Route
          path="/ss-technologies-medical-coding/complaints"
          element={<Complaints />}
        />

        {/* RECORD CLASSES */}
        <Route
          path="/ss-technologies-medical-coding/record-class"
          element={<RecordClass />}
        />

        {/* CONTACT */}
        <Route
          path="/ss-technologies-medical-coding/contact"
          element={<Contact />}
        />

              {/* CONTACT */}
        <Route
          path="/ss-technologies-medical-coding/contact"
          element={<Contact />}
        />

        {/* ADMIN LOGIN */}
        <Route
          path="/ss-technologies-medical-coding/admin-login"
          element={<AdminLogin />}
        />

        {/* ADMIN ENQUIRIES */}
        <Route
          path="/ss-technologies-medical-coding/admin-enquiries"
          element={<AdminEnquiries />}
        />

      </Routes>
    </>
  );
}

export default App;