import * as React from 'react';
import Link from "next/link";
import theme from '../../utils/theme';
import { useRouter } from 'next/router';
import { NavItem } from './types';

const navItems: NavItem[] = [
  {
    name: "About",
    url: "/about"
  },
  {
    name: "Blog",
    url: "/blog"
  }
]

const Navigation: React.FC<{}>  = () => {
  const router = useRouter();
  return (
    <header>
      <nav className="nav">
        <div className="left">
          <Link href="/">
            <a className='logo'>Inceptial Solutions</a>
          </Link> 
        </div>
        <div className="right">
          <ul>
          { 
            navItems.map((item: NavItem, index: number) => {
              const pathName = router.pathname.includes(item.url) ? 'active' : '';
              return  (
                  <li key={index} className={pathName}>
                    <Link href={item.url}>
                      <a >{item.name}</a>
                    </Link>
                  </li>
              );
            })
          }
          </ul>
        </div>
        <style jsx>{`
          .nav a {
            font-family: 'Montserrat-Regular';
            letter-spacing: 2.5px;
            color: ${theme.colors.blue};
          }
          .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 0px;
            // border: 1px solid linear-gradient(180deg,#ed5459,#fd561f);
            box-shadow: 0px 0px 10px 1px ${theme.colors.blue};
            opacity: .9;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 9999;
            background: white;
          }
          .nav .active {
            background: ${theme.colors.blue};
            padding: 5px;
          }
          .nav .active a {
            color: white;
          }
          .left, .right {
            padding: 0px 10px;
          }
          .left a {
            text-decoration: none;
            text-transform: uppercase;
            font-weight: bold;
          }
          .right ul {
            display: flex;
            list-style: none;
            justify-content: space-between;
            margin: 0;
            padding: 0;
          }
          .right ul li {
            padding: 10px;
          }
          .right ul li a {
            text-decoration: none;
            text-transform: uppercase;
          }
          @media(max-width: 768px) {
            .nav {
              flex-direction: column;
              padding: 30px 0px 15px;
            }
            .right{
              margin-top: 15px;
            }
          }
        `}</style>
      </nav>
    </header>
  )
};

export default Navigation;