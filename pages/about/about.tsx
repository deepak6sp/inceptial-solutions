import App from '../App';
import Link from 'next/link';
const About = () => (
  <App>
    <div className='about-me'>
      <h2>ABOUT ME</h2>
      <p>I am self learner, passionate Full Stack Web Developer having 5 years of experience. Recently, I have been focusing on UX and front end development. I develop with skills of minimal usability designs and using core XHTML/HTML, CSS and Javascript. My coding follows reusable component based structure for easy maintenance, scaling and debugging. I also, have experince using PHP and Node frameworks.</p>
      <Link href='/images/Deepak_Resume.pdf'>
        <a className='button' target='_blank'>Resume</a>
      </Link>
    </div>
    <div className='things'>
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
        please feel free to connect with me on
        <Link href='https://www.linkedin.com/in/deepak-prakash-a1bb2825/'>
          <a target='_blank'>
            &nbsp;&nbsp;<span aria-hidden="true" className="fa fa-linkedin"></span>
          </a>
        </Link> 
       </p>
    </div>
    <style jsx>{`
      .about-me, .things, .blog, .contact {
        margin-top: 80px;
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
        box-shadow: 0 0 5px #253b49;
        border-radius: 5px;
        padding: 10px;
      }
      .contact a {
        text-decoration: none;
        color: #fd561f;
      }
    `}</style>
  </App>
);
  
export default About