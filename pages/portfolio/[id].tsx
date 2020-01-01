import { useRouter } from 'next/router';
import Link from 'next/link';
import App from '../App';
import projects from '../portfolio/projects.json';

const Project: React.FC<void> = () => {
  const router = useRouter();
  const project = projects.filter(project => project.slug === router.query.id)[0];
  return (
    <App>
      <>
        <div>
          <Link href='/portfolio'>
            <a className='back-button'><span className='fa fa-arrow-left'></span>&nbsp;Back</a>
          </Link> 
        </div>
        {
          router.query.id && 
          <>
            <h1 className='project-name'>{project.name}</h1>
            <div className='project-details'>
              <div className='left'>
                <p className='project-desc'>{project.description}</p>
                <p className='project-release-date'><strong>Released:</strong> {project.released}</p>
                <p className='project-technologies'>
                  <span>Technologies used:</span>
                  { 
                    project.technologies.map( (element, index) => {
                      return <li key={index}>{element}</li>
                    })
                  }
                </p>
                {
                  project.weblink && 
                  <Link href={`${project.weblink}`} prefetch={false}>
                    <a className='button' target='_blank'>website</a>
                  </Link>
                }
              </div>
              <div className='right'>
                <img className='image-mobile' src={`/images/${project.slug}-mobile.png`} />
                <img className='image-pad' src={`/images/${project.slug}-pad.png`} />
              </div>
            </div>
            <div className='image-wrapper'>
              <img className='image-desktop' src={`/images/${project.slug}-desktop.png`} />
            </div>
          </>
        }
      </>
      <style jsx>{`
        .project-details {
          display: flex;
          justify-content: space-between;
          font-family: 'Montserrat-Regular';
        }
        .project-details .right {
          position: relative;
          max-height: 200px;
          display: flex;
          justify-content: center;
          margin-top: 100px;
        }
        .project-details .right img {
          transform: rotateY(-30deg) rotateX(5deg);
          transform-origin: left bottom;
          box-shadow: 0 0 10px #253b49;
          border: 0.5em solid #fff;
          border-radius: 10px;
        }
        .image-mobile {
          max-width: 100px;
          z-index: 1;
          position: absolute;
          left: -6em;
          bottom: -1em;
        }
        .image-pad {
          max-width: 300px;
        }
        .image-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }
        .image-wrapper img {
          margin-top: 100px;
          width: 100%;
          box-shadow: 0 0 10px #253b49;
          border-radius: 10px;
        }
        .project-name {
          text-align: center;
          font-family: 'Raleway-Thin';
          margin-bottom: 100px;
          color: #fd561f;
          text-transform: uppercase;
          font-size: 50px;
        }
        .project-technologies span {
          font-size: 20px;
          color: #fd561f;
          display: block;
          margin-bottom: 10px;
          margin-top: 30px;
        }
        @media(max-width: 768px) {
          .project-details {
            flex-direction: column;
            flex-flow: wrap;
          }
          .project-details .right {
            margin: 100px auto;
          }
        }

      `}</style>
    </App>
  )
};

export default Project;