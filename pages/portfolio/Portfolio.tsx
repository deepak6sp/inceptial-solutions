import React, { useState } from 'react';
import Link from 'next/link';
import App from '../App';
import projects from './projects.json';

const Projects = () => {
    const [activeType, setActiveType] = useState('type-all');

    return (
      <>
        <div className="projects">
          <h2>PROJECTS</h2>
          <div className='categories'>
            <li 
              className={(activeType == 'type-all') ? 'active': ''} 
              onClick={() => setActiveType('type-all')}>
                All
            </li>
            <li 
              className={(activeType == 'type-js') ? 'active': ''}
              onClick={() => setActiveType('type-js')}>
                Javascript
            </li>
            <li 
              className={(activeType == 'type-php') ? 'active': ''} 
              onClick={() => setActiveType('type-php')}>
                Php
            </li>
          </div>
          <ul>
          {
            projects.map((project, index) => {
              let activeClass = 'show';
              if((`type-${project.type}` !== activeType) && activeType != 'type-all') {
                activeClass = 'hidden';
              }
              return (
                <li key={index} className={activeClass}>
                  <Link href="/project/[id]" as={`/project/${project.slug}`}>
                    <a>
                      <img src={`/images/${project.slug}-desktop.png`} />
                      <h4>{project.name}</h4>
                    </a>
                  </Link>
                </li>
              )
            })
          }
          </ul>
          <Link href='/about'>
            <a className='button'>About me</a>
          </Link>
        </div>
        <style jsx>{`
            .projects {
              text-align: center;
            }
            .projects ul {
              display: flex;
              flex-wrap: wrap;
              padding: 0;
            }
            .projects ul li {
              max-width: 33.33%;
              flex: 0 0 33.33%;
              list-style-type: none;
              min-width: 270px;
              max-width: 270px;
              margin: auto;
            }
            .projects ul li a {
              display: block;
              padding: 20px;
              text-decoration: none;
              color: #253b49;
              text-transform: uppercase;
              font-family: 'Montserrat-Regular';
            }
            img {
              width: 100%;
              box-shadow: 10px 10px 10px 0px #ddd;
              max-height: 180px;
              min-height: 180px;
            }
            img:hover {
              opacity: 0.6;
            }
            .projects .hidden {
              display: none;
            }
            .categories {
              margin: 50px;
              display: flex;
              justify-content: center;
            }
            .categories li {
              list-style-type: none;
              width: 100px;
              padding: 10px;
              min-width: 120px;
              cursor: pointer;
              color: white;
              margin-right: 1px;
              border: 1px solid transparent;
              transition: all .2s ease-in;
              text-transform: uppercase;
              font-family: 'Montserrat-Regular';
              font-size: 14px;
              background: white;
              border: 1px solid #253b49;
              color: #253b49;
            }
            .categories li:hover {
              border: 1px solid #253b49;
              color: white;
              background: #253b49;
            }
            .categories .active {
              background: #253b49;
              color: white;
            }
            .categories .active:hover {
              color: white;
            }
            @media(max-width: 768px) {
              .categories {
                display: none;
              }
              .projects ul {
                flex-direction: column;
              }
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