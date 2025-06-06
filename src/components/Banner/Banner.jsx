import { Link } from "react-scroll";
import "./Banner.scss";
import BannerVideo from "../../assets/video/drone.mp4";

const Banner = () => {
  return (
    <section id="home" className="banner">
      <div className="video-container">
        <video autoPlay muted loop playsInline className="banner-video">
          <source src={BannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>

      <div className="banner-content">
        <div className="container">
          <h1 className="slide-up">
            Premium Roofing <span>Services</span>
          </h1>
          <p className="banner-subtitle slide-up stagger-delay-1">
            Quality materials, expert craftsmanship, and excellent customer
            service
          </p>
          <div className="banner-buttons slide-up stagger-delay-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-primary"
            >
              Our Services
            </Link>
            <Link
              to="quote"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-secondary"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-container">
          <span className="arrow"></span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
