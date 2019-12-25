import React from 'react';
import Link from 'next/link';
import App from '../App';
import projects from './projects.json';

const Projects = () => {
    return (
      <>
        <div className="projects">
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
              min-width: 300px;
              max-width: 300px;
              max-height: 200px;
              min-height: 200px;
              margin: 50px 50px;
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