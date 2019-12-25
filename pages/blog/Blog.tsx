import App from '../App';
import Link from 'next/link';
const Blog = () => (
  <App>
    <div>Main Blog page</div>
    <Link href="/blog/1" as={`/blog/1`}>
      <a>First blog</a>
    </Link>
  </App>
);
  
export default Blog