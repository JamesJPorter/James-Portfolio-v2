import React from "react";
import resumeFile from "../documents/James-Porter-resume.pdf";

const Resume = () => {
  const educationDetails = [
    {
      yearRange: "2022 - 2023",
      title: "UCLA Online Coding Boot Camp - FullStack Web Development",
      place: "UCLA Extension",
      desc: "Completed a 6 month program learning fullstack Web Development utilizng RESTful API's and MERN Stack architecture.",
    },
    {
      yearRange: "2014 - 2016",
      title: "Bachelor of Arts Political Science",
      place: "University of California, Los Angeles",
      desc: "",
    },
    {
      yearRange: "2012 - 2014",
      title: "Associates Degree",
      place: "Antelope Valley College",
      desc:"",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2020 - current",
      title: "Freelance Web Developer",
      place: "",
      desc: "Offering up my technical and client relations skills to provide value to small businesses, private individuals and large corporations alike via the building of effective and efficient web apps. REACT, MongoDB and MYSQL are my specialties.",
    },
    {
      yearRange: "2018 - Current",
      title: "Patron Services Manager",
      place: "Royce Hall Theater Management Services",
      desc: "Coordinator of all things audience facing at UCLA's most historic theater. Ensures high security standards for audiencnes, VIP's, celebrities and presidential level foreign and domestic government officials. Coordinates client onboarding, ",
    },
    {
      yearRange: "2014-2018",
      title: "House Manager",
      place: "Geffen Playhouse",
      desc: "Managed a team of Ushers to prep the venue, receive guests, manage the theater during events, create detailed house reports, resolve conflicts with displeased guests and generally solve all guest related problems during live events.",
    },
    {
      yearRange: "2016-2017",
      title: "Fellow - Researcher / Coordinator",
      place: "Propper Daley",
      desc: "Composed client press releases for Paramount Pictures and Universal. Created social media copy for clients including the Call of Duty Endowment. Created back-end inventory management and digital assets for 2017 Call of Duty Race to Prestige fundraising event",
    },
  ];

  const skills = [
    {
      name: "Web Design",
      percent: 65,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Angular Js",
      percent: 60,
    },
    {
      name: "Bootstrap",
      percent: 99,
    },
  ];

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">Resume</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          A summary of My Resume
        </h2>
        {/* Heading end*/}
        <div className="row g-5 mt-5">
          {/* My Education */}
          <div className="col-lg-6 wow fadeInUp">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Education</h2>
            <div className="border-start border-2 border-primary ps-3">
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
          {/* My Experience */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Experience</h2>
            <div className="border-start border-2 border-primary ps-3">
              {experienceDetails.length > 0 &&
                experienceDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* My Skills */}
        {/* <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div className="col-md-6 wow fadeInUp" key={index}>
                <p className="fw-500 text-start mb-2">
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div className="progress progress-sm mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div> */}
        <p className="text-center mt-5 wow fadeInUp">
          <a
            className="btn btn-outline-dark shadow-none rounded-0"
            href={resumeFile}
            download
          >
            Download CV
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
