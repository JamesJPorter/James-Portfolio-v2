import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = () => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const htmlElement = document.getElementsByTagName("html")[0];
  const isRtl = htmlElement.getAttribute("dir") === "rtl";

  const filters = {
    DETAILED: "Details",
    MOCKUPS: "Mockups",
    YOUTUBE: "Youtube Videos",
    VIMEO: "Vimeo Videos",
  };

  const types = {
    IMAGE: "image",
    VIDEO: "video",
    DOCUMENT: "document",
  };

  const projectsData = [
    {
      title: "Sojourner",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "An app desgined to help you organized trips of all kinds with friends by coordinating accommodation, travel and activity information between all attending. Sporting a social media like view of all of your fellow travelers' shared information, Sojourner intends to make group trips of all kinds a breeze.",
        technologies: "REACT, Javascript, JSX, Express, MONGODB",
        url: {
          name: "Github Repo",
          link: "https://github.com/gulogulo208/sojourner",
        },

        sliderImages: [
          "images/projects/sojourner/sojourner-home.png",
          "images/projects/sojourner/sojourner-tahoe-posts.png",
        ],
      },

      thumbImage: "images/projects/sojourner/sojourner-login.png",

      categories: [filters.MOCKUPS],
    },
    {
      title: "Sojourner Login",
      type: types.IMAGE,

      thumbImage: "images/projects/sojourner/sojourner-home.png",

      categories: [filters.MOCKUPS],
    },
    {
      title: "Sojourner Trip Content",
      type: types.IMAGE,
      thumbImage: "images/projects/sojourner/sojourner-tahoe-posts.png",

      categories: [filters.MOCKUPS],
    },
    {
      title: "BirdsEye - Dashboard",
      type: types.IMAGE,

      thumbImage: "images/projects/BirdsEye/BirdsEye-dashboard.png",
      categories: [filters.MOCKUPS],
    },
    {
      title: "BirdsEye",
      type: types.DOCUMENT,
      document: {
        projectInfo:
        "A business development and project management application which enables users to map out their organization from the executive down through divisions, departments, projects and individual staff along with their associated goals.",
        technologies: "JavaScript, HTML5, CSS3, Express, SQL",
        url: {
          name: "Github Repo",
          link: "https://github.com/gulogulo208/universal-scheduler",
        },
        sliderImages: [
          "images/projects/BirdsEye/BirdsEye-dashboard.png",
          "images/projects/BirdsEye/BirdsEye-myteam.png",
        ],
      },
      thumbImage: "images/projects/BirdsEye/BirdsEye-login.png",
      categories: [filters.MOCKUPS],
    },
    {
      title: "BirdsEye - Teams",
      type: types.IMAGE,

      thumbImage: "images/projects/BirdsEye/BirdsEye-myteam.png",

      categories: [filters.MOCKUPS],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
      originLeft: !isRtl,
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  const getKeyByValue = (value) => {
    return Object.keys(filters).find((key) => filters[key] === value);
  };

  const getFilterClasses = (categories) => {
    if (categories.length > 0) {
      let tempArray = [];
      categories.forEach((category, index) => {
        tempArray.push(getKeyByValue(category));
      });
      return tempArray.join(" ");
    }
  };

  return (
    <>
      <section id="portfolio" className={"section bg-light"}>
        <div className={"container"}>
          {/* Heading */}
          <p className="text-center mb-2 wow fadeInUp">
            <span className="bg-primary text-dark px-2">Portfolio</span>
          </p>
          <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
            Some of My Projects
          </h2>
          {/* <span className="bg-primary text-dark px-2">Sojourner</span> */}
          {/* Heading end*/}
          {/* Filter Menu */}
          {/* <ul
            className={
              "portfolio-menu nav nav-tabs fw-600 justify-content-start justify-content-md-center border-bottom-0 mb-5 wow fadeInUp"
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " + (filterKey === oneKey ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(oneKey)}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul> */}
          {/* Filter Menu end */}
          <div className="portfolio wow fadeInUp">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      getFilterClasses(project.categories)
                    }
                    key={index}
                  >
                    <div className="portfolio-box">
                      <div className="portfolio-img">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div
                          className="portfolio-overlay"
                          onClick={() => {
                            setSelectedProjectDetails(projectsData[index]);
                            setIsOpen(true);
                          }}
                        >
                          <button className="popup-ajax stretched-link border-0 p-0 ">
                            {" "}
                          </button>
                          <div className="portfolio-overlay-details">
                            <p className="text-primary text-8">
                              {project.type === types.DOCUMENT && (
                                <i className="fas fa-file-alt"></i>
                              )}
                              {project.type === types.IMAGE && (
                                <i className="fas fa-image"></i>
                              )}
                              {project.type === types.VIDEO && (
                                <i className="fas fa-video"></i>
                              )}
                            </p>
                            <h5 className="text-white text-5">
                              {project?.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      {isOpen && (
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          setIsOpen={setIsOpen}
        ></ProjectDetailsModal>
      )}
    </>
  );
};

export default Portfolio;
