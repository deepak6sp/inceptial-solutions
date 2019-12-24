import { Navigation, NavigationTypes } from "../shared/component/navigation";

const navItems: NavigationTypes.NavItem[] = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "About",
    url: "/about"
  }
]

const App = () => <Navigation navItems={navItems}/>

export default App;