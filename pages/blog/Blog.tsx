import App from '../App';
import Link from 'next/link';
import blogPosts from './blog.json';

const Blog = () => (
  <App title="blog" description="inceptial solutions blog articles">
    <h1>Blog</h1>
    <ul className='blog-posts'>
    { 
      blogPosts.map((blogPost, index) =>
        <li key={index}>
          <Link href={`/blog/${blogPost.slug}`} as={`/blog/${blogPost.slug}`}>
            <a>
              <span className='title'>{blogPost.title}</span>
              <span>{blogPost.date} - {blogPost.category}</span>
            </a>
          </Link>
        </li>
      )
    }
    </ul>
    <style jsx>{`
      h1 {
        text-align: center;
      }
      .blog-posts {
        display: flex;
        flex-flow: wrap;
      }
      .blog-posts a {
        display: block;
        text-decoration: none;
        box-shadow: 10px 10px 10px 10px #ddd;
        margin: 30px 0px;
        padding: 40px;
        font-family: 'Montserrat-Regular'
      }
      li {
        width: 100%;
        list-style: none;
      }
      li span {
        display: block;
        color: #253b49;
      }
      li span.title {
        font-size: 25px;
        margin-bottom: 20px;
      }
      li a:hover {
        background: #eee;
      }
    `}</style>
  </App>
);
  
export default Blog