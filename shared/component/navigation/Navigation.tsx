import * as React from 'react';
import Link from "next/link";
import { NavProps, NavItem } from './types';

const Navigation: React.FC<NavProps>  = ({ navItems }) => (
  <div className="nav">
    <div className="left">
      <Link href="/">
        <a>Inceptial Solutions</a>
      </Link> 
    </div>
    <div className="right">
      <ul>
      { 
        navItems.map((item: NavItem, index: number) => {
          return  (
              <li key={index}>
                <Link href={item.url}>
                  <a>{item.name}</a>
                </Link>
              </li>
          );
        })
      }
      </ul>
    </div>
    <style jsx>{`
      .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
      }
      .left a {
        text-decoration: none;
        text-transform: uppercase;
        font-family: cursive;
        font-weight: bold;
        color: black;
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
        color: black;
      }
    `}</style>
  </div>
);

export default Navigation;