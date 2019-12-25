import { Navigation, NavigationTypes } from "../shared/component/navigation";
import Portfolio from './portfolio';

const navItems: NavigationTypes.NavItem[] = [
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "About",
    url: "/about"
  },
  {
    name: "Contact",
    url: "/contact"
  },
  {
    name: "Blog",
    url: "/blog"
  }
]

const App = (props) => (
  <>
    {props.children && 
      <>
        <Navigation navItems={navItems}/>
        <div className='main'>
          {props.children}
        </div>
      </>
    }
    {!props.children && <Portfolio/>}
    <style jsx>{`
      .main {
        clear: both;
      }
    `}</style>
  </>
);

export default App;