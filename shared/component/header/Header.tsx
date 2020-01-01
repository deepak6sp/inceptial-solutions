import Head from 'next/head';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <Head>
      <title> Inceptial Solutions {router.pathname.replace('/', '')}</title>
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      <meta name="description" content="Melbourne based software & web Development company serving small scale industries. Full stack development including deployment, seo and support."></meta>
    </Head>
  );
}

export default Header