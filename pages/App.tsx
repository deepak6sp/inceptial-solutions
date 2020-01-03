import { Navigation } from '../shared/component/navigation';
import Footer from '../shared/component/footer';
import Portfolio from './portfolio';
import Header from '../shared/component/header';


const App = (props) => (
  <>
    {props.children && 
      <>
        <Header {...props}/>
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
        min-height: calc(100vh - 420px);
      }
      h1 {
        font-family: "Raleway-Regular";
        font-size: 34px;
        color: #253b49;
        text-transform: uppercase;
      }
      h2 {
        font-family: "Raleway-Regular";
        font-size: 30px;
        color: #253b49;
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
        border: 2px solid #253b49;
        color: #253b49;
        background: #fff;
        transition: all .2s ease-in;
        text-decoration: none;
      }
      .button:hover {
        border: 2px solid transparent;
        background: #253b49;
        color: white;
      }
      .back-button {
        text-decoration: none;
        text-transform: lowercase;
        color: #253b49;
        font-family: Montserrat-Regular,sans-serif;
      }
      .red-background {
        background: linear-gradient(90deg,#ed5459,#fd561f);
      }
      .blue-background {
        background: #253b49;
      }
      .blue-background .button {
        background: transparent;
        border: 2px solid white;
        color: white;
      }
      .blue-background .button:hover {
        background: white;
        border: 2px solid #253b49;
        color: #253b49;
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
      .fa {
        font-family: 'FontAwesome';
      }
      .fa-arrow-left:before {
        content: '\F177';
      }
      .fa-linkedin:before {
        content: '\F0E1';
      }
      .fa-map-marker:before {
        content: '\F041';
      }
      .fa-user-circle-o:before {
        content: '\F2BE';
      }
      .fa-codepen:before {
        content: '\F1CB';
      }
      .fa-pencil:before {
        content: '\F040';
      }
      .fa-address-book:before {
        content: '\F2BA';
      }
      .fa-empire:before {
        content: '\F1D1';
      }
      .fa-code:before {
        content: '\F121';
      }
      .fa-tablet:before {
        content: '\F10A';
      }
      .fa-desktop:before {
        content: '\F108';
      }
      .fa-mobile:before {
        content: '\F10B';
      }
      .fa-ship:before {
        content: '\F21a';
      }
      .fa-seo:before {
        content: '\F002';
      }
      .fa-support:before {
        content: '\F145';
      }
    `}</style>
  </>
);

export default App;