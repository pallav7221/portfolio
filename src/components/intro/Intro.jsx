import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/pallav.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>10 months</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>40+ Completed Assignments</small>
            </article>
          </div>
          {/* <p>I’ve spent the last several months in a remote environment, working with <b>HTML, CSS, JavaScript, React, Redux </b> etc. building everything from landing pages to APIs under the guidence of <b>MASAI SCHOOL</b> .</p> */}
          <p>Passionate full-stack engineer with experience in
            developing applications using a wide range of front-end and back-end tools like React, JavaScript,
            Typescript, Node JS, Express JS, postgreSQL, MongoDB,
            HTML, CSS.
            <br/> I am a quick learner and a team player who
            is passionate about writing clean and efficient code.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro