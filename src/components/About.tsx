import React from "react";
import myImage from "../assets/myImg.png";

const About = () => {
  const skills = [
    { id: "ReactJS_skill", content: "ReactJS", porcentage: "70%", value: "70" },
    { id: "TypeScript", content: "TypeScript", porcentage: "60%", value: "60" },
    {
      id: "JavaScript_skill",
      content: "JavaScript",
      porcentage: "80%",
      value: "80",
    },
    { id: "MUI", content: "MUI", porcentage: "75%", value: "75" },
    { id: "Tailwind CSS", content: "Tailwind CSS", porcentage: "75%", value: "75" },

    { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
    { id: "CSS3_skill", content: "CSS", porcentage: "75%", value: "75" },
    { id: "Supabase", content: "Supabase", porcentage: "60%", value: "80" },

    { id: "Firebase", content: "Firebase", porcentage: "50%", value: "80" },
  ];

  const about_me = [
    {
      id: "first-p-about",
      content:
        "A BCA student who wants to secure a challenging position in a reputed organization where l can utilize my technical skills to contribute to the growth of the company and also enhance my own knowledge and skills.",
    },
  ];

  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full" style={{ borderRadius: "20px" }}>
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div style={{ margin: "0 auto" }}>
                      <div className="about-img">
                        <img
                          className="img-fluid rounded b-shadow-a"
                          src={myImage}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
                    {about_me.map((content) => (
                      <p style={{ fontSize: "1.05rem" }} key={content.id}>
                        {content.content}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="col-md-6">
                  {/* Skills Section */}
                  <div className="skill-mf" style={{ paddingTop: "2.5rem" }}>
                    {skills.map((skill) => (
                      <React.Fragment key={skill.id}>
                        <span>{skill.content}</span>{" "}
                        <span className="pull-right">{skill.porcentage}</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: skill.porcentage }}
                            aria-valuenow={parseInt(skill.value, 10)}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
