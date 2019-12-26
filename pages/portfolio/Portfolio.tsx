import React from 'react';
import Link from 'next/link';
import App from '../App';
import projects from './projects.json';

const Projects = () => {
    return (
      <>
        <div className="projects">
          <h2>PROJECTS</h2>
          {
            projects.map((project, index) => {
              return (
                <Link href="/project/[id]" as={`/project/${project.slug}`} key={index}>
                  <a><img src={`/images/${project.slug}-desktop.png`} /></a>
                </Link>
              )
            })
          }
        </div>
        <style jsx>{`
            .projects {
              text-align: center;
            }
            img {
              min-width: 270px;
              max-width: 270px;
              max-height: 180px;
              min-height: 180px;
              margin: 45px;
              box-shadow: 10px 10px 10px 0px #ddd;
            }
          `}</style>
      </>
    )
};

const Portfolio = () => (
  <App>
    <Projects />
  </App>
);
  
export default Portfolio