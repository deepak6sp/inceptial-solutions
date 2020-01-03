import Head from 'next/head';

const Header = (props) => {
  return (
    <Head>
      <title> Inceptial Solutions { props.title }</title>
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      <meta name="description" content={ props.description }></meta>
    </Head>
  );
}

export default Header