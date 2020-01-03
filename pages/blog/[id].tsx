import { useRouter } from 'next/router';
import Link from 'next/link';
import App from '../App';
import blogPosts from './blog.json';
import { Markdown } from 'react-markdown-reader';

const BlogPost: React.FC<void> = () => {
  const router = useRouter();
  const blogPost = blogPosts.filter(blogPost => blogPost.slug === router.query.id)[0];
  return (
    <App 
      title={router.query.id && blogPost.title}
      description={router.query.id && blogPost.description}>
      <>
        <div>
          <Link href='/blog'>
            <a className='back-button'><span className='fa fa-arrow-left'></span>&nbsp;Back</a>
          </Link> 
          <h1>{ router.query.id && blogPost.title }</h1>
          { router.query.id && <Markdown>{require(`../blogContent/${blogPost.slug}/index.md`)}</Markdown> }
        </div>
      </>
      <style jsx>{`
        h1 {
          text-align: center;
          font-family: 'Raleway-Thin';
          margin-bottom: 100px;
          color: #fd561f;
          text-transform: uppercase;
          font-size: 50px;
        }
      
      `}</style>
      <style jsx global>{`
      .markdown p {
        font-size: 18px;
      }
      .markdown pre {
        background: #404040;
        color: white;
        padding: 20px;
        line-height: 20px;
      }
      `}</style>
    </App>
  );
}

export default BlogPost;