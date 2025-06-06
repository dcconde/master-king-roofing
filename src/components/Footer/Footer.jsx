import { Link } from "react-scroll";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="logo-link"
            >
              <span className="logo-text">
                Master King <span>Roofing</span>
              </span>
            </Link>
            <p>
              Providing quality roofing services with integrity and reliability
              since 2010.
            </p>

            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="icon-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="icon-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="icon-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="icon-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="home" spy={true} smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="quote"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#services">Roof Installation</a>
                </li>
                <li>
                  <a href="#services">Roof Repair</a>
                </li>
                <li>
                  <a href="#services">Roof Replacement</a>
                </li>
                <li>
                  <a href="#services">Roof Inspection</a>
                </li>
                <li>
                  <a href="#services">Gutter Installation</a>
                </li>
                <li>
                  <a href="#services">Emergency Repairs</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Contact Info</h4>
              <ul className="contact-info">
                <li>
                  <i className="icon-phone"></i>
                  <span>(403) 560-4600</span>
                </li>
                <li>
                  <i className="icon-email"></i>
                  <span>masterkingroofingltd@gmail.com</span>
                </li>
                <li>
                  <i className="icon-location"></i>
                  <span>Calgary, AB</span>
                </li>
                <li>
                  <i className="icon-time"></i>
                  <span>
                    Mon-Fri: 8am-6pm
                    <br />
                    Sat: 9am-2pm
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Master King Roofing. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
