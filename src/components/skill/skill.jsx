import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineHtml5 } from "react-icons/ai"
import { FaNodeJs, FaReact } from "react-icons/fa"
import { SiDocker, SiGrafana, SiGraphql, SiInsomnia, SiKubernetes, SiMaterialui, SiMongodb, SiPostgresql, SiPostman, SiPrisma, SiPrometheus, SiRedux, SiStrapi, SiTypescript } from "react-icons/si"
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io"
import './skill.css';

const Skill = () => {
  return (
    <>
      <section id="skill">
        <h5>The Skills I Have</h5>
        <h2>Skills</h2>
        <div className="container skill__container">
          <div className="skill__frontend">
            <h3>Front-end Development</h3>
            <div className="skill__content">
              <article className="skill__details">
                <AiOutlineHtml5 className="skill__details-icon" />
                <h4>HTML</h4>
              </article>
              <article className="skill__details">
                <IoLogoCss3 className="skill__details-icon" />
                <h4>CSS</h4>
              </article>
              <article className="skill__details">
                <IoLogoJavascript className="skill__details-icon" />
                <h4>JavaScript</h4>
              </article>
              <article className="skill__details">
                <SiTypescript className="skill__details-icon" />
                <h4>Typescript</h4>
              </article>
              <article className="skill__details">
                <FaReact className="skill__details-icon" />
                <h4>React</h4>
              </article>
              <article className="skill__details">
                <SiRedux className="skill__details-icon" />
                <h4>Redux</h4>
              </article>
              <article className="skill__details">
                <FaNodeJs className="skill__details-icon" />
                <h4>Node Js</h4>
              </article>
              <article className="skill__details">
                <SiMongodb className="skill__details-icon" />
                <h4>MongoDB</h4>
              </article>
              <article className="skill__details">
                <SiPostgresql className="skill__details-icon" />
                <h4>Postgresql</h4>
              </article>
              <article className="skill__details">
                <SiGraphql className="skill__details-icon" />
                <h4>Graphql</h4>
              </article>
              <article className="skill__details">
                <SiMaterialui className="skill__details-icon" />
                <h4>Materialui</h4>
              </article>
              <article className="skill__details">
                <BsGithub className="skill__details-icon" />
                <h4>Git/GitHub</h4>
              </article>
              <article className="skill__details">
                <SiPrisma className="skill__details-icon" />
                <h4>Prisma</h4>
              </article>
              <article className="skill__details">
                <SiDocker className="skill__details-icon" />
                <h4>Docker</h4>
              </article>
              <article className="skill__details">
                <SiKubernetes className="skill__details-icon" />
                <h4>Kubernetes</h4>
              </article>
              <article className="skill__details">
                <SiStrapi className="skill__details-icon" />
                <h4>Strapi</h4>
              </article>
              <article className="skill__details">
                <SiPostman className="skill__details-icon" />
                <h4>Postman</h4>
              </article>
              <article className="skill__details">
                <SiInsomnia className="skill__details-icon" />
                <h4>Insomnia</h4>
              </article>

              <article className="skill__details">
                <SiGrafana className="skill__details-icon" />
                <h4>Grafana</h4>
              </article>
              <article className="skill__details">
                <SiPrometheus className="skill__details-icon" />
                <h4>Prometheus</h4>
              </article>
            </div>
          </div>
          {/* <div className="skill__backend">
          <h3>Back-end Development</h3>
          <div className="skill__content">
          <article className="skill__details">
              <FaNodeJs className="skill__details-icon" />
              <h4>Node Js</h4>
            </article>
            <article className="skill__details">
              <BsGithub className="skill__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div> */}

        </div>
      </section>
    </>

  )
}

export default Skill