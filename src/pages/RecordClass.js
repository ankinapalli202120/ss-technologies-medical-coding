import React from "react";

function RecordingClasses() {
  const classes = [
    {
      icon: "🏥",
      title: "HCC Coding",
      description:
        "Learn HCC concepts, risk adjustment and practical coding approaches.",
      videoUrl: "",
    },
    {
      icon: "📋",
      title: "E/M Coding",
      description:
        "Learn Evaluation and Management coding concepts with practical examples.",
      videoUrl: "",
    },
    {
      icon: "🏥",
      title: "OP Coding",
      description:
        "Learn outpatient coding concepts, documentation and practical cases.",
      videoUrl: "",
    },
    {
      icon: "🏥",
      title: "IP Coding",
      description:
        "Learn inpatient coding concepts, guidelines and practical scenarios.",
      videoUrl: "",
    },
    {
      icon: "🚑",
      title: "ED Coding",
      description:
        "Learn Emergency Department coding concepts and documentation.",
      videoUrl: "",
    },
    {
      icon: "🩺",
      title: "Surgery Coding",
      description:
        "Learn surgical coding concepts and common procedure coding scenarios.",
      videoUrl: "",
    },
    {
      icon: "🏥",
      title: "IPDRG",
      description:
        "Learn inpatient coding, DRG concepts and practical coding workflows.",
      videoUrl: "",
    },
  ];

  const watchClass = (item) => {
    if (item.videoUrl) {
      window.open(item.videoUrl, "_blank");
    } else {
      alert(
        `${item.title} recorded class is not available yet. The recording will be added soon.`
      );
    }
  };

  return (
    <main>
  <section className="recording-page">
        <div className="section-heading">
          <span>RECORDED CLASSES</span>

          <h2>Learn From Recorded Classes</h2>

          <p>
            Choose a department and learn medical coding through
            practical recorded classes at your own pace.
          </p>
        </div>

        <div className="course-grid">
          {classes.map((item, index) => (
            <div className="course-card" key={index}>
              <div className="course-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <button
                className="btn"
                onClick={() => watchClass(item)}
              >
                Watch Class →
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default RecordingClasses;