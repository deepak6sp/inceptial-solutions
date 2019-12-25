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
          <Link href="/">
            <a>Back</a>
          </Link> 
        </div>
        {
          router.query.id && 
          <>
            <h1 className='project-name'>{project.name}</h1>
            <div className='project-details'>
              <p className='project-desc'>{project.description}</p>
              <p className='project-release-date'>Released: {project.released}</p>
              <p className='project-technologies'>
                Technologies used: 
                { 
                  project.technologies.map( (element, index) => {
                    return <li key={index}>{element}</li>
                  })
                }
              </p>
              {
                project.weblink && 
                <Link href={`${project.weblink}`} prefetch={false}>
                  <a target="_blank">visit</a>
                </Link>
              }
            </div>
          </>
        }
      </>
      <style jsx>{`
        .main {
          clear: both;
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </App>
  )
};

export default Project;