import React, { useState } from 'react';
import Link from 'next/link';
import theme from '../../shared/utils/theme';
import App from '../App';
import projects from './projects.json';

const Projects = () => {
    const [activeType, setActiveType] = useState('type-all');

    return (
      <>
        <div className="projects">
          <section className='projects-header'>
            <div className="overlay"></div>
            <div className='header-text'>
              <h1>Inceptial Solutions</h1>
              <h2>Enabling technology <br></br>for business</h2>
            </div>
          </section>
          <section className='square-boxes'>
              <h3>IS</h3>
          </section>
          <section className='projects-body'>
            <span className="fa fa-codepen"></span>
            <h1>PROJECTS</h1>
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
                    <Link href="/portfolio/[id]" as={`/portfolio/${project.slug}`}>
                      <a>
                        <img src={`/images/${project.slug}-desktop.png`} alt={project.slug}/>
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
          </section>
        </div>
        <style jsx>{`
          .projects-header {
            height: 500px;
            background-image: url(/images/melbourne.jpg);
            background-position: top;
            background-repeat: no-repeat;
            background-size: cover;
            text-align: center;
          }
          .projects-header .overlay {
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: .7;
            z-index: -1;
          }
          .header-text {
            position: absolute;
            top: 100px;
            left: 0;
            right: 0;
            bottom: 0;
          }
          .projects-header h1 {
            color: white;
            font-size: 50px;
            margin-top: 100px;
            font-family: 'Montserrat-Thin';
          }
          .projects-header h2 {
            color: white;
            font-size: 30px;
            font-family: 'Montserrat-Regular';
          }
          .square-boxes {
            height: 100px;
            width: 100px;
            background: #1a202c;
            margin-top: -50px;
            z-index: 999;
            position: relative;
            margin-left: 100px;
            box-shadow: 5px 5px 0px 0px #fd561f;
            color: white;
            font-size: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Montserrat-Thin';
          }
          .projects-body {
            text-align: center;
            background: white;
            max-width: 1100px;
            margin: 50px auto;
            padding: 20px;
          }
          .projects .fa-codepen {
            text-align: center;
            display: block;
            font-size: 30px;
            color: #fd561f;
            margin-bottom: 30px;
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
            color: ${theme.colors.blue};
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
            border: 1px solid ${theme.colors.blue};
            color: ${theme.colors.blue};
          }
          .categories li:hover {
            border: 1px solid ${theme.colors.blue};
            color: white;
            background: ${theme.colors.blue};
          }
          .categories .active {
            background: ${theme.colors.blue};
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
  <App title="portfolio" description="Melbourne based software & web Development company serving small scale industries. Full stack development including deployment, seo and support.">
    <Projects />
  </App>
);
  
export default Portfolio