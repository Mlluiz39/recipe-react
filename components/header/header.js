import Head from 'next/head';
import Link from 'next/link';

export default function Header(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="/styles/page.css" />
        <link
          rel="stylesheet"
          href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>
      <header className="header">
        <Link href="/">
          <a>
            <img alt="logo da pagina" src="/img/logo.svg" />
          </a>
        </Link>
      </header>
    </div>
  );
}
