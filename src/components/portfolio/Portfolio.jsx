import React from 'react';
import IMG1 from '../../assets/lumen5.png';
import IMG2 from "../../assets/Banggood.png";
import IMG3 from "../../assets/medium_clone.png"


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Medium Clone',
      img: IMG3,
      des:"Here you can Read Blogs, Create Blogs, Follow other Creators, Like Blogs, and vice versa as well.",
      type:"A MERN Stack Web App.",
      team:" A collaborative project built by 5 Developers within 7 days.",
      teckStack:"React | NodeJs | ExpressJs | MongoDB | Chakra-Ui",
      link: 'https://medium-web-app.netlify.app/',
      github: 'https://github.com/pallav7221/Medium-Clone',
    },
    {
      id: 2,
      title: 'Banggood Clone',
      img: IMG2,
      des:"Banggood is a global leading online shop, offering millions of products that are well-selected. From consumer electronics, tools, home, toys, sports, to clothing, everything could be delivered.",
      team:"A collaborative project built by a team of 4, executed in 6 days",
      teckStack:"HTML | React | Redux | Styled Components",
      link: 'https://banggood-site-clone.netlify.app/',
      github: 'https://github.com/Jasmine-Shaikh/Banggood-Clone/tree/main/banggood-clone',
    },
    {
      id: 3,
      title: 'Lumen5 video maker Clone',
      des:"Lumen5 is a video creation platform that enables anyone without training or experience to easily create engaging video content within 5 minute.",
      img: IMG1,
      team:"A collaborative project built by a team of 5, executed in 6 days",
      teckStack:"HTML | CSS | JavaScript | LocalStorage",
      link: 'https://lumen5c.netlify.app/',
      github: 'https://github.com/OfficialSiddharthBisht/Lumen5-Video-Maker-Clone',
    }
    
  ];
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <h3 className='portfolio__title'>{pro.title}</h3>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          
            <p>{pro.des}</p>
            <p>{pro?.type}</p>
            <p>{pro.team}</p>
        
            <p>{pro.teckStack}</p>
          
          <div className="portfolio__item-cta">
            <a href={pro.github} target="_blank" className="btn">GitHub</a>
            <a href={pro.link} target="_blank" className="btn btn-primary">Live Demo</a>
          </div>
          
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio