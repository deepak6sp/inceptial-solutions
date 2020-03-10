import App from '../App';
import Link from 'next/link';
import blogPosts from './blog.json';
import theme from '../../shared/utils/theme';

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
        margin-top: 200px;
      }
      .blog-posts {
        display: flex;
        flex-flow: wrap;
        max-width: 1100px;
        margin: 50px auto;
        padding: 20px;
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
        color: ${theme.colors.blue};
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