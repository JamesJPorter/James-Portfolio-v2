import React from "react";
const AboutUs = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Heading */}
        <p className="text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">About Me</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          Know Me More
        </h2>
        {/* Heading end*/}
        <div className="row">
          <div className="col-lg-8 text-center text-lg-start wow fadeInUp">
            <h2 className="text-8 fw-400 mb-3">
              Hi, I'm{" "}
              <span className="fw-700 border-bottom border-3 border-primary">
                James Porter
              </span>
            </h2>
            <p className="text-5">
              I am a Full-Stack web developer looking to develop my skills while generating value for clients and colleagues alike. I am proficient in building functional and efficient MERN stack applications, RESTful APIs and have over 14 years experience in team management, hospitality and client relations. With a combination of interpersonal, business and technical skills I hope to bring a unique value proposition to each project. 
            </p>
          </div>
          <div
            className="col-lg-4 mt-4 mt-lg-0 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="featured-box style-4">
              <div className="featured-box-icon text-25 fw-500 bg-primary rounded-circle">
                <span className="wow">
                  14
                </span>
              </div>
              <h3 className="text-7">
                Years of <span className="fw-700">Managerial Experience</span>
              </h3>
            </div>
            <div className="featured-box style-4">
              <div className="featured-box-icon text-25 fw-500 bg-primary rounded-circle">
                <span>
                  1
                </span>
              </div>
              <h3 className="text-7">
                Year of <span className="fw-700">Full Stack Experience</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row gy-3 mt-4">
          <div className="col-6 col-lg-4 wow fadeInUp">
            <p className="text-muted fw-500 mb-0">Name:</p>
            <p className="text-4 text-dark fw-600 mb-0">James Porter</p>
          </div>
          <div className="col-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
            <p className="text-muted fw-500 mb-0">Email:</p>
            <p className="text-4 fw-600 mb-0">
              <a className="link-dark" href="mailto:porterjjames@gmail.com">
              porterjjames@gmail.com
              </a>
            </p>
          </div>
          {/* <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
            <p className="text-muted fw-500 mb-0">Date of birth:</p>
            <p className="text-4 text-dark fw-600 mb-0">11 December, 1993</p>
          </div> */}
          <div className="col-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
            <p className="text-muted fw-500 mb-0">From:</p>
            <p className="text-4 text-dark fw-600 mb-0">Los Angeles</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
