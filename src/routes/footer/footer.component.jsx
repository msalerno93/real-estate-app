import "./footer.styles.scss";
const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="footer-items">
        <a
          className="portfolio"
          href="https://salerno-portfolio-website.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Made by Salerno Inc.
        </a>
      </ul>
      <ul className="footer-items">© Copyright 2023</ul>
    </div>
  );
};

export default Footer;
