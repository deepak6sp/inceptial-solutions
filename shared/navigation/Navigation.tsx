import Link from "next/link";
import { NavProps, NavItem } from './types';

const Navigation: React.FC<NavProps>  = ({ navItems }) => (
  <div className="nav">
    <div className="nav-left">Logo</div>
    <div className="nav-right">
      { 
        navItems.map((item: NavItem) => {
          return  (
            <ul>
              <li>
                <Link href={item.url}>
                  <a>{item.name}</a>
                </Link>
              </li>
            </ul>
          );
        })
      }
    </div>
  </div>
);

export default Navigation;