import theme from '../../utils/theme';
const Footer = () => (
  <footer>
    <p className='left'> @ Inceptial Solutions 2018</p>
    <p className='right'> Designed & developed by Deepak Prakash</p>
    <style jsx>{`
      footer {
        background: ${theme.colors.blue};
        position: absolute;
        width: 100%;
        color: white;
        text-align: center;
      }
      @media(min-width: 768px) {
        footer .left {
          float: left;
          padding: 10px;
        }
        footer .right {
          float: right;
          padding: 10px;
        }
      }
    `}</style>
  </footer>
);

export default Footer