import App from '../App';
import Link from 'next/link';
const About = () => (
  <App>
    <section className='about-header'>
      <div className="overlay"></div>
      <h1>A bit about me</h1>
      <h6>Deepak Prakash 
        <br/>
        <span className="fa fa-map-marker fa-lg"></span> 
        <span>&nbsp;&nbsp;Melbourne,&nbsp; Australia</span>
      </h6>
    </section>
    <div className='about-wrapper'>
      <div className='about-me'>
        <span className="fa fa-user-circle-o"></span>
        <h2>ABOUT ME</h2>
        <p>I am a self learner, passionate Full Stack Web Developer having 8 years of experience in IT domain. 
          I develop websites with skills of minimal usability designs and using core XHTML/HTML, CSS and Javascript. 
          My coding follows reusable component based structure for easy maintenance, scaling and debugging. 
          I also, have extensive experince using Angular, React, Node and PHP frameworks.</p>
        <Link href='/images/Deepak_Resume.pdf'>
          <a className='button' target='_blank'>my Resume</a>
        </Link>
      </div>
      <div className='things blue-background'>
        <span className="fa fa-codepen"></span>
        <h2>THINGS I DO</h2>
        <div className='panels'>
          <div className='first'>
            <article>
              <span className='fa fa-empire'></span>
              <h6> Prototyping </h6>
              <p> I use my favourite <strong>Sketch App</strong> for prototyping and wireframe,
                  and proficiently convert them to complete web solutions. Unfortunately, I don't design things.</p>
            </article>
            <article>
              <span className='fa fa-code'></span>
              <h6> Development </h6>
              <p> I develop custom made user friendly web pages and applications using latest open source technologies. I use build tools such as
              npm, webpack, gulp, sass to speed up developement process.</p>
            </article>
            <article>
              <div className='fa-group'>
                <span className='fa fa-tablet'></span>
                <span className='fa fa-desktop'></span>
                <span className='fa fa-mobile'></span>
              </div>
              <h6> Testing </h6>
              <p> I will test the whole application across major browsers and devices. I have been practising test driven development. So unit tests (code functionality) and end to end tests will be my main focus to achieve code stability.</p>
            </article>
          </div>
          <div className='second'>
            <article>
              <span className='fa fa-ship'></span>
              <h6> Deployment </h6>
              <p> It does not end in design and development. I will depoly the code and host your website on the server (AWS or shared server).</p>
            </article>
            <article>
              <span className='fa fa-seo'></span>
              <h6> SEO </h6>
              <p> I will finally make sure your website appears on google search using SEO techniques such as google analytics and tag manager. Unfortunately, I do not do website marketing such as facebook campaign.</p>
            </article>
            <article>
              <span className='fa fa-support'></span>
              <h6> Support </h6>
              <p> I believe in customer service being most critical part of the business. So, I will try to respond to your queries within 1 business day.</p>
            </article>
          </div>
        </div>
        <p></p>
        <Link href='/portfolio'>
          <a className='button'>my Projects</a>
        </Link>
      </div>
      <div className='blog'>
        <span className="fa fa-pencil"></span>
        <h2>BLOG</h2>
        <p> I started blogging to share my knowledge and expericence, focusing on modern UX trends and latest web development technologies.</p>
        <Link href='/blog'>
          <a className='button'>My blog</a>
        </Link>
      </div>
      <div className='contact red-background'>
        <span className="fa fa-address-book"></span>
        <h2>Contact</h2>
        <p> Sorry, I am currently not accepting any projects at the moment. However, if you like to keep in touch, 
          please feel free to connect with me on &nbsp;
          <Link href='https://www.linkedin.com/in/deepak-prakash-a1bb2825/'>
            <a target='_blank'>
              <span className="fa fa-linkedin"></span>
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
        opacity: .7;
        z-index: -1;
      }
      .about-header h1 {
        color: white;
        text-align: center;
        margin-top: 150px;
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
      .about-me .fa-user-circle-o, .things .fa-codepen, .blog .fa-pencil, .contact .fa-address-book {
        text-align: center;
        display: block;
        font-size: 30px;
        color: #253b49;
        margin: 30px;
      }
      .things .fa-codepen, .contact .fa-address-book {
        color: white;
      }
      .things, .blog, .contact {
        padding: 30px;
      }
      .things {
        color: white;
      }
      .things .fa-group {
        display: flex;
        justify-content: center;
      }
      .things .fa-empire, .things .fa-code, .things .fa-tablet,  
      .things .fa-mobile, .things .fa-desktop, .fa-ship, .fa-seo, .fa-support {
        font-size: 30px;
        margin-top: 30px;
        display: block;
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
        border: 1px solid #253b49;
        margin-top: 10px;
      }
      .panels {
        display: flex;
        flex-direction: column;
      }
      .panels .first, .panels .second {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
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
        line-height: 30px;
        text-align: center;
        display: inline-block;
        border-radius: 50%;
        transition: all .1s ease-in;
      }
      .contact a:hover {
        color: #fd561f;
        transform: scale(1);
        border: .1rem solid #fd561f;
        box-shadow: 0 0 10px #fd561f;
      }
      @media(max-width: 768px) {
        .panels {
          flex-direction: column;
          flex-flow: wrap;
        }
        .panels .first {
          flex-direction: column;
          flex-flow: wrap;
        }
        .panels .second {
          flex-direction: column;
          flex-flow: wrap;
        }
        .panels article {
          width: 100%;
          margin-bottom: 20px;
        }
        .about-header h6 {
          font-size: 22px;
        }
      }
    `}</style>
  </App>
);
  
export default About