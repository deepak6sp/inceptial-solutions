const Footer = () => (
  <footer>
    <p className='left'> @ Inceptial Solutions 2018</p>
    <p className='right'> Designed & developed by Deepak Prakash</p>
    <style jsx>{`
      footer {
        background: #fd561f;
        position: absolute;
        width: 100%;
        color: white;
      }
      footer .left {
        float: left;
        padding: 10px;
      }
      footer .right {
        float: right;
        padding: 10px;
      }

    `}</style>
  </footer>
);

export default Footer