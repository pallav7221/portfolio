import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineHtml5 } from "react-icons/ai"
import { FaNodeJs, FaReact } from "react-icons/fa"
import { SiDocker, SiGrafana, SiGraphql, SiInsomnia, SiKubernetes, SiMaterialui, SiMongodb, SiPostgresql, SiPostman, SiPrisma, SiPrometheus, SiRedux, SiStrapi, SiTypescript } from "react-icons/si"
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io"
import './experience.css';

const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>Work experience I have</h5>
        <h2>Professional Experience</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>UpForce Tech</h3>
            <p>Our deep commitment to the users and technology oriented
              approach has endeared Upforece Tech to our clients so much that
              they automatically think of us whenever they require a web centric
              solution based on Front-end programming.
              Serving people as well as companies across the globe has proved to be a wonderful experience for us as well as we strive to provide 100% satisfaction to our users in Europe, America, and the Middle Eastern countries.</p>
            <h4>Responsibilities :</h4>
            <p>1. Test and debug web applications, and resolve issues that arise
              during development.
            <br />
              2. Develop detailed test cases that cover various scenarios,
              including positive and negative test cases. Ensure that each
              test case is well-written and easily understandable to ensure
              accuracy and efficiency.
            <br />
              3. Run performance tests using appropriate tools and techniques
              to measure the performance of the application. This includes
              monitoring the Performance , Accessibility, Best practices, SEO.
            <br />
              4. Implement performance optimization techniques to improve
              the performance of the application. This includes optimizing
              database queries, refactoring code, reduce the image size
            </p>
          </div>
          <div className="experience__frontend btm_mar">
            <h3>ConvInt.ai</h3>
            {/* <div className="experience__content">
          <article className="experience__details">
              <AiOutlineHtml5 className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <h4>Redux</h4>
            </article>
          </div> */}
            <p>ConvInt.ai defines Hiring 2.0. It takes the resume out of the
              recruitment equation. ConvInt.ai is an intelligent AI-based, cloud
              native conversational platform, designed to accelerate corporates
              and recruiters in fulfilling their recruitment needs and redefining the
              experience for candidates and jobseekers.</p>
            <h4>Responsibilities :</h4>
            <p> 1. Built automation feature for shortlisting or rejecting candidates,
              based on business rule defined, using Query Builder, React,
              TypeScript, PostgreSQL, Prisma.
              <br />
              2. Built feature allowing candidates to access the assessment using
              a QR code.
              <br />
              3. Built encryption and decryption of assessment URL for the client
              using Node crypto module.
              <br />
              4. Worked on event driven architecture where I was involved in
              notifying third party platforms when any event happens in the
              Convint platform via webhooks.
              <br />
              5. Made the database searchable so that we can filter data with
              multiple conditions using react, typescript, MUI grid.
              <br />6. Debugged and resolved technical issues, providing effective
              solutions to improve the overall performance of the application.
              <br />7. Built the official website for convint.ai using React.js, Node.js,
              Strapi, GraphQL, Postgres, etc. based on the requirements.
              <br />8. Worked on refactoring of the existing user interface and layout of
              the Convint platform using MUI library.
              <br />9. Was involved in peer reviews and application testing as part of
              the engineering process.
              <br />10. Worked on Kubernetes clusters and deployed applications on
              Google Kubernetes Engine (GKE) using Docker containers, Helm
              charts, CI/CD pipeline etc, resulting in improved scalability and
              reliability of the systems</p>
          </div>
         

        </div>
      </section>
     
    </>

  )
}

export default Experience