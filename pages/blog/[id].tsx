import App from '../App';
import Link from 'next/link';

const Blog = () => (
  <App>
    <Link href="/blog">
      <a>Back</a>
    </Link>
    <div>sub Blog page</div>
  </App>
);
  
export default Blog