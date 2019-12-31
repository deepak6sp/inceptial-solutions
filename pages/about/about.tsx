import App from '../App';
import Link from 'next/link';
const About = () => (
  <App>
    <section className='about-header'>
      <div className="overlay"></div>
      <h3>A bit about me</h3>
      <h6>Deepak Prakash 
        <br/>
        <span aria-hidden="true" className="fa fa-map-marker fa-lg">
          &nbsp;Melbourne, Australia
        </span> 
      </h6>
    </section>
    <div className='about-wrapper'>
      <div className='about-me'>
        <h2>ABOUT ME</h2>
        <p>I am self learner, passionate Full Stack Web Developer having 8 years of experience in IT domain. 
          Recently, I have been focusing on UX, front end development and devops. I develop with skills of minimal usability designs and using core XHTML/HTML, CSS and Javascript. 
          My coding follows reusable component based structure for easy maintenance, scaling and debugging. 
          I also, have extensive experince using Angular, React, Node and PHP frameworks.</p>
        <Link href='/images/Deepak_Resume.pdf'>
          <a className='button' target='_blank'>Resume</a>
        </Link>
      </div>
      <div className='things red-background'>
        <h2>THINGS I DO</h2>
        <div className='panels'>
          <article>
            <h6> Prototyping </h6>
            <p> I use my favourite <strong>Sketch App</strong> for prototyping and wireframes,
                and convert them to complete web solutions.</p>
          </article>
          <article>
            <h6> Development </h6>
            <p> I develop custom made user friendly web pages and applications using latest open source technologies. I use build tools such as
            npm, bower, webpack, gulp, sass to speed up developement process.</p>
          </article>
          <article>
            <h6> Testing </h6>
            <p> I consider testing to be as important as design and development, so I believe in test driven development. Also, I will make sure the
                whole application works accross multi browsers and devices.</p>
          </article>
        </div>
        <p></p>
        <Link href='/portfolio'>
          <a className='button'>Projects</a>
        </Link>
      </div>
      <div className='blog'>
        <h2>BLOG</h2>
        <p> I am blogging to share my knowledge and expericence focusing on modern design trends and latest web development technologies.</p>
        <Link href='/blog'>
          <a className='button'>Blog</a>
        </Link>
      </div>
      <div className='contact'>
      <h2>Contact</h2>
      <p> Sorry, I am currently not accepting any projects. However, if you like to keep in touch, 
        please feel free to connect with me on &nbsp;
        <Link href='https://www.linkedin.com/in/deepak-prakash-a1bb2825/'>
          <a target='_blank'>
            <span aria-hidden="true" className="fa fa-linkedin"></span>
          </a>
        </Link> 
       </p>
    </div>
    </div>
    <style jsx>{`
      .about-header {
        height: 400px;
        background-image: url(/images/melbourne.jpg);
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -1;
      }
      .about-header .overlay {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: .5;
        z-index: -1;
      }
      .about-header h3 {
        color: white;
        text-align: center;
        margin-top: 150px;
        font-size: 50px;
        font-family: 'Montserrat-Thin';
      }
      .about-header h6 {
        color: white;
        text-align: center;
        font-size: 30px;
        font-family: 'Montserrat-Thin';
      }
      .about-header h6 span {
        font-size: 16px;
      }
      .about-wrapper {
        margin-top: 200px;
        box-shadow: 0 0 10px #253b49;
        background: white;
        border-radius: 5px;
      }
      .about-me {
        padding: 30px;
      }
      .things, .blog, .contact {
        padding: 30px;
      }
      .things {
        color: white;
        
      }
      .things h2, .things h6 , .contact h2 {
        color: white;
      }
      .things h2:after, .contact h2:after {
        border: 1px solid white;
      }
      h2:after {
        content: '';
        display: block;
        width: 50px;
        border: 1px solid #fd561f;
        margin-top: 10px;
      }
      .panels {
        display: flex;
        justify-content: space-between;
      }
      .panels article{
        width: 30%;
        text-align: center;
        box-shadow: 0 0 5px #ffffff;
        border-radius: 5px;
        padding: 10px;
      }
      .contact {
        background: #253b49;
        color: white;
      }
      .contact a {
        text-decoration: none;
        color: white;
        cursor: pointer;
        border: .1rem solid transparent;
        box-shadow: 0 0 10px white;
        width: 30px;
        height: 30px;
        line-height: 27px;
        text-align: center;
        display: inline-block;
        border-radius: 50%;
        transition: all .1s ease-in;
      }
      .contact a:hover {
        color: #fd561f;
        transform: scale(.9);
        border: .1rem solid #fd561f;
        box-shadow: 0 0 10px #fd561f;
      }
      @media(max-width: 768px) {
        .panels {
          flex-direction: column;
          flex-flow: wrap;
        }
        .panels article {
          width: 100%;
          margin-bottom: 20px;
        }
        .about-header h3 {
          font-size: 30px;
        }
        .about-header h6 {
          font-size: 22px;
        }
      }
    `}</style>
  </App>
);
  
export default About