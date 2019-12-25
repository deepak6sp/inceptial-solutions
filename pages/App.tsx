import { Navigation, NavigationTypes } from "../shared/component/navigation";
import Portfolio from './portfolio';

const App = (props) => (
  <>
    {props.children && 
      <>
        <Navigation />
        <div className='main'>
          {props.children}
        </div>
      </>
    }
    {!props.children && <Portfolio/>}
    <style jsx global>{`
      body {
        margin: 0;
      }
      .main {
        clear: both;
        max-width: 1200px;
        margin: 150px auto;
      }
    `}</style>
  </>
);

export default App;