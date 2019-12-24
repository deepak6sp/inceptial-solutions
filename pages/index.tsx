import Navigation from "../shared/navigation/Navigation";
import { NavigationTypes } from '../shared/navigation';

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

const Index: React.FC<void> = () => <Navigation navItems={navItems}/>;

export default Index;
