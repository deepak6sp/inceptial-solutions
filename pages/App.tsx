import { Navigation } from '../shared/component/navigation';
import Footer from '../shared/component/footer';
import Portfolio from './portfolio';

const App = (props) => (
  <>
    {props.children && 
      <>
        <Navigation />
        <main className='main'>
          {props.children}
        </main>
        <Footer />
      </>
    }
    {!props.children && <Portfolio/>}
    <style jsx global>{`
      @media(max-width: 768px) {
        .main {
          padding: 10px;
        }
      }
      body {
        margin: 0;
      }
      .main {
        clear: both;
        max-width: 1100px;
        margin: 150px auto;
        padding: 20px;
        min-height: calc(100vh - 380px);
      }
      h2 {
        font-family: "Raleway-Regular";
        font-size: 30px;
        color: #fd561f;
        text-transform: uppercase;
      }
      h6 {
        color: #404040;
        margin: 30px 0;
        font-weight: 700;
        font-family: Raleway-Regular,sans-serif;
        font-size: 20px;
      }
      p {
        font-family: "Montserrat-Regular";
        line-height: 30px;
      }
      .button {
        display: inline-flex;
        min-width: 150px;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 10px;
        font-family: Montserrat-Regular,sans-serif;
        text-transform: lowercase;
        border-radius: 50px;
        border: 2px solid #fd561f;
        color: #fd561f;
        background: #fff;
        transition: all .2s ease-in;
        text-decoration: none;
      }
      .button:hover {
        border: 2px solid transparent;
        background: #fd561f;
        color: white;
      }
      .back-button {
        text-decoration: none;
        text-transform: lowercase;
        color: #fd561f;
        font-family: Montserrat-Regular,sans-serif;
      }
      .red-background {
        background: linear-gradient(90deg,#ed5459,#fd561f);
      }
      .red-background .button {
        background: transparent;
        border: 2px solid white;
        color: white;
      }
      .red-background .button:hover {
        background: white;
        border: 2px solid #fd561f;
        color: #fd561f;
      }
      @font-face {
        font-family: "Montserrat-Regular";
        src: url("/fonts/montserrat/Montserrat-Regular.ttf") format("ttf"),
               url("/fonts/montserrat/Montserrat-Regular.woff") format("woff"),
                 url("/fonts/montserrat/Montserrat-Regular.woff2") format("woff2"),
                   url("/fonts/montserrat/Montserrat-Regular.eot") format("eot");;
      }
       
      @font-face {
        font-family: "Raleway-Regular";
        src: url("/fonts/raleway/Raleway-Regular.ttf") format("ttf"),
               url("/fonts/raleway/Raleway-Regular.woff") format("woff"),
                 url("/fonts/raleway/Raleway-Regular.woff2") format("woff2"),
                   url("/fonts/raleway/Raleway-Regular.eot") format("eot");
      }
       
      @font-face {
        font-family: "Montserrat-Thin";
        src: url("/fonts/montserrat/Montserrat-Thin.ttf") format("ttf"),
               url("/fonts/montserrat/Montserrat-Thin.woff") format("woff"),
                 url("/fonts/montserrat/Montserrat-Thin.woff2") format("woff2"),
                   url("/fonts/montserrat/Montserrat-Thin.eot") format("eot");;
      }
       
      @font-face {
        font-family: "Raleway-Thin";
        src: url("/fonts/raleway/Raleway-Thin.ttf") format("ttf"),
               url("/fonts/raleway/Raleway-Thin.woff") format("woff"),
                 url("/fonts/raleway/Raleway-Thin.woff2") format("woff2"),
                   url("/fonts/raleway/Raleway-Thin.eot") format("eot");
      }
      @font-face {
        font-family: 'FontAwesome';
        src: url("/fonts/font-awesome/fontawesome-webfont.ttf") format("ttf"),
               url("/fonts/font-awesome/fontawesome-webfont.woff") format("woff"),
                 url("/fonts/font-awesome/fontawesome-webfont.woff2") format("woff2"),
                   url("/fonts/font-awesome/fontawesome-webfont.eot") format("eot");
                    url("/fonts/font-awesome/fontawesome-webfont.svg") format("svg");
        font-weight: normal;
        font-style: normal;
      }
      .fa-arrow-left:before {
        font-family: 'FontAwesome';
        content: "\f177";
      }
      .fa-linkedin:before {
        font-family: 'FontAwesome';
        content: "\F0E1";
      }
      .fa-map-marker:before {
        font-family: 'FontAwesome';
        content: "\F041";
      }
      
    `}</style>
  </>
);

export default App;