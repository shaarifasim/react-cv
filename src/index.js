import React from "react";
import ReactDom from "react-dom";
import "./styles.css";

function Hi() {
  return (
    <div className="main">
      <div className="img-SS">
        <div className="Lname">{/* <h2>Shaarif Asim</h2> */}</div>
        <div className="img-S">
          <span>
            <img src="https://avatars.githubusercontent.com/u/84714602?v=4" />
          </span>
        </div>
      </div>
      <div className="name-skils">
        <div className="name">
          <h2>Shaarif Asim</h2>
          <spnn>
            Energetic and passionate university student working towards a
            bachelor in Software Engineering (SE) at Sir Syed University of
            Engineering & Technology. Aiming to use my knowledge that I have
            acquired from my coursework as well as self-study and with my hard
            work to satisfy my internship at your organization and also willing
            to learn more from this internship. Good at front-end web designing.
            Also good at digital marketing or social media marketing.
          </spnn>
        </div>

        <div>
          <ul>
            <h2 className="PL">
              <u> Profile/Project links:</u>
            </h2>
            <li>
              <u>Linkedin:</u>
              <a href="#">
                https://www.linkedin.com/in/shaarif-asim-371b82215/
              </a>
            </li>
            <br />
            <li>
              <u>Github:</u>
              <a href="#">https://github.com/shaarifasim?tab=repositories</a>
            </li>
            <br />
            <li>
              <u>Projects:</u>
              <a href="#">https://html-css-projects-by-shaarif.netlify.app/</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="QC">
        <div className="Qualification">
          <h2>
            <u> Qualification: </u>
          </h2>
          <ul>
            <h3>Undergraduate:</h3>
            <li>Sir Syed University Of Engineering and Techology</li> <br />
            <h3>Intermediate:</h3>
            <li>DJ Sindh Govt. Science College</li> <br />
            <h3>Matriculation:</h3>
            <li>Seedling Grammar School</li>
          </ul>
        </div>

        <div className="courses" s>
          <h2>
            <u>Courses:</u>
          </h2>
          <ul>
            <li>Enterprise from Corsera</li>
            <br />
            <li>Digital Markiting from Click5</li>
            <br />
            <li>Currently Enrolled in SMTI for Web development</li>
          </ul>
        </div>
      </div>

      <div className="skills-exp">
        <div className="skills">
          <h2>
            <u> Skills: </u>
          </h2>
          <ul>
            <li>Html5</li>
            <li>Css3</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>Jquery</li>
            <li>MS-Office</li>
            <li>Project-Management</li>
            <li>React-basic</li>
          </ul>
        </div>

        <div className="exp">
          <h2>
            <u> Experience </u>
          </h2>
          <span>
            Fresh -- <i>Junior Front-End Developer</i>
          </span>
        </div>
      </div>
    </div>
  );
}
ReactDom.render(<Hi />, document.querySelector("#root"));
