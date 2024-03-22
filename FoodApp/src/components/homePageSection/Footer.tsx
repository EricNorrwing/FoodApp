import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>Email: contact@flavorfiesta.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          {/* <div className="logo">
            <Link to="/">
              <img src={logo} alt="Recipe App Logo" />
            </Link>
          </div> */}
          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <p>&copy; 2024 FlavorFiesta. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
